import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Title, Button, TitleButton, ButtonWithBorder } from './styles';
import { useAuth } from '../../hooks/auth';

export default () => {
  const [isClicked, setIsClicked] = useState(false);
  const { isSingIn, onSingIn } = useAuth();

  //esse tipo de rota para esta situação foi melhor abordagem,
  //com link estava redirecionando a path,mas nao modificava o caminho da path
  //nos filhos apenas no browser, apos atualizar manualmente aparecia o conteúdo,
  //dessa forma altera a rota e o conteúdo
  //window.location.pathname so funciona no desenvolvimento, no produção não funciona
  const handleLogin = () => {
    isSingIn && onSingIn();
    // window.location.pathname = navigation;
  };

  return (
    <Container>
      {/* tem que ser as rotas dos filhos o / e do filho marketing */}
      <ButtonWithBorder>
        <Title to='/'>App</Title>
      </ButtonWithBorder>
      {isSingIn ? (
        <Button onClick={handleLogin}>
          <TitleButton to='/'> Log out </TitleButton>
        </Button>
      ) : (
        <Button>
          <TitleButton to='/auth/signin'> Log in </TitleButton>
        </Button>
      )}
    </Container>
  );
};
