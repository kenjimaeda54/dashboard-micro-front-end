import React from 'react';
import { Container, Title, Button, TitleButton } from './styles';

export default () => {
  return (
    <Container>
      {/* tem que ser as rotas dos filhos o / e do filho marketing */}
      <Title to='/'>App</Title>
      <Button>
        {/* rota do filho authApp   */}
        <TitleButton to='/auth/signin'>Login</TitleButton>
      </Button>
    </Container>
  );
};
