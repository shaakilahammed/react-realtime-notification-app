import React from 'react';
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

const Navbar = () => {
  return (
    <Container>
      <Logo>RTNA</Logo>
      <Icons>
        <Icon>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </Icon>
        <Icon>
          <Badge badgeContent={4} color="primary">
            <EmailRounded />
          </Badge>
        </Icon>
        <Icon>
          <Badge badgeContent={4} color="primary">
            <Settings />
          </Badge>
        </Icon>
      </Icons>
    </Container>
  );
};

export default Navbar;
