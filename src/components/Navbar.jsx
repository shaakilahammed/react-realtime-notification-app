import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge } from '@material-ui/core';
import { EmailRounded, Settings } from '@material-ui/icons';
const Container = styled.div`
  height: 50px;
  background-color: lightseagreen;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  position: relative;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  text-align: center;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
`;
const Icon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Notifications = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  color: #000;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Notification = styled.div`
  padding: 5px;
  font-size: 14px;
  border-bottom: 1px solid #d6d6d6;
`;

const MarkReadButton = styled.button`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  border: none;

  cursor: pointer;
`;

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    socket.on('getNotification', (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  console.log(notifications);

  const displayNotification = ({ senderName, type }) => {
    let action;
    if (type === 1) {
      action = 'unliked';
    } else if (type === 2) {
      action = 'liked';
    } else if (type === 3) {
      action = 'commented';
    } else {
      action = 'shared';
    }

    return <Notification>{`${senderName} ${action} your post`}</Notification>;
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };
  return (
    <Container>
      <Logo>RTNA</Logo>
      <Icons>
        <Icon onClick={() => setOpen(!open)}>
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsIcon />
          </Badge>
        </Icon>
        <Icon>
          <Badge badgeContent={0} color="primary">
            <EmailRounded />
          </Badge>
        </Icon>
        <Icon>
          <Badge badgeContent={0} color="primary">
            <Settings />
          </Badge>
        </Icon>
      </Icons>
      {open && (
        <Notifications>
          {notifications.length > 0 ? (
            notifications.map((notification) =>
              displayNotification(notification)
            )
          ) : (
            <Notification>No new notifications</Notification>
          )}
          <MarkReadButton onClick={handleRead}>Mark as read</MarkReadButton>
        </Notifications>
      )}
    </Container>
  );
};

export default Navbar;
