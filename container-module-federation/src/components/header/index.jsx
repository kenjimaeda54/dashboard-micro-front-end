import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Title, Button, TitleButton, ButtonWithBorder } from './styles';

export default () => {
  const [isClicked, setIsClicked] = useState(false);

  //esse tipo de rota para esta situação foi melhor abordagem,
  //com link estava redirecionando a path,mas nao modificava o caminho da path
  //nos filhos apenas no browser, apos atualizar manualmente aparecia o conteúdo,
  //dessa forma altera a rota e o conteúdo
  const handleNavigation = (navigation) => {
    window.location.pathname = navigation;
  };

  return (
    <Container>
      {/* tem que ser as rotas dos filhos o / e do filho marketing */}
      <ButtonWithBorder onClick={() => handleNavigation('/')}>
        <Title>App</Title>
      </ButtonWithBorder>
      <Button onClick={() => handleNavigation('/auth/signin')}>
        {/* rota do filho authApp   */}
        <TitleButton>Login</TitleButton>
      </Button>
    </Container>
  );
};
