import {
  ChatBubble,
  Favorite,
  Share,
  InfoRounded,
  FavoriteBorderOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
  height: auto;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 500;
  font-size: 14px;
`;
const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const UserName = styled.span``;

const Interection = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  justify-content: space-around;
`;

const CardIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
  padding: 0 10px;
`;

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type, likeClick = false) => {
    likeClick && setLiked(!liked);
    socket.emit('sendNotification', {
      senderName: user,
      receiverName: post.username,
      type: type,
    });
  };
  return (
    <Container>
      <Info>
        <UserImage src={post.userImg} />
        <UserName>
          {post.fullname} - {post.username}
        </UserName>
      </Info>
      <PostImage src={post.postImg} />
      <Interection>
        {liked ? (
          <CardIcon>
            <Favorite
              style={{ color: 'red' }}
              onClick={() => handleNotification(1, true)}
            />
          </CardIcon>
        ) : (
          <CardIcon>
            <FavoriteBorderOutlined
              onClick={() => handleNotification(2, true)}
            />
          </CardIcon>
        )}
        <CardIcon>
          <ChatBubble onClick={() => handleNotification(3)} />
        </CardIcon>
        <CardIcon>
          <Share onClick={() => handleNotification(4)} />
        </CardIcon>
        <CardIcon>
          <InfoRounded />
        </CardIcon>
      </Interection>
    </Container>
  );
};

export default Card;
