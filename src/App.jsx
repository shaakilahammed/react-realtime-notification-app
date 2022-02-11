import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { io } from 'socket.io-client';

import Card from './components/Card';
import Navbar from './components/Navbar';
import { posts } from './data';
const Body = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 50vh;
  border-radius: 5px;
  border: 0.5px solid lightgreen;
`;

const Login = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: lightseagreen;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Username = styled.span`
  color: lightseagreen;
  font-weight: bold;
  position: absolute;
  top: 15px;
  right: 20px;
`;
function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:5000');

    console.log(socket);
  });

  console.log(user);
  return (
    <Body>
      <Container>
        {user ? (
          <>
            <Navbar />
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
            <Username>{user}</Username>
          </>
        ) : (
          <Login>
            <Input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={() => setUser(username)}>Login</Button>
          </Login>
        )}
      </Container>
    </Body>
  );
}

export default App;
