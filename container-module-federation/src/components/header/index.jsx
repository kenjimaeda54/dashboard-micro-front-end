import React from 'react';
import { Container, Title, Button, TitleButton } from './styles';

export default () => {
  return (
    <Container>
      <Title to='/'>App</Title>
      <Button>
        <TitleButton>Login</TitleButton>
      </Button>
    </Container>
  );
};
