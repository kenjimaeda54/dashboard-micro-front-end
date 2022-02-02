import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  const { onSingIn } = useAuth();

  useEffect(() => {
    const { onParentNavigate, initialPathName } = mount(ref.current, {
      //ele vai pegar a path atual que esta no histórico do browser
      initialPathName: history.location.pathname,
      onNavigate: ({ pathname: route }) => {
        const { pathname } = history.location;
        if (pathname !== route) {
          history.push(route);
        }
      },
      //aqui pode ficar sem o corpo na teoria ficaria assim
      // onSingIn: () => {
      //    onSingIn()
      // }
      //mas tem um recurso javascript que aceita short hand
      onSingIn,
    });
    //onParentNavigate e um função callback que vai ser chamada quando o usuário clicar em alguma rota
    //tudo que tem no corpo e recebido como parâmetro na função, ou seja o onParentNavigate
    //esta recebendo ja os parâmetros e passando sem precisar abrir o escopo ()
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
