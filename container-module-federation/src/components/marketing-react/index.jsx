import React, { useRef, useEffect } from 'react';
import { mount, handleNavigation } from 'marketing/MarketApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const refMarketing = useRef(null);
  const history = useHistory();

  //estamos criando um objeto para lidar com navegação entre filho
  //e o pai,agora a funcao mount recebe dois parâmetro, um elemento html
  //e um objeto que contem as funções de navegação
  useEffect(() => {
    const { onParentNavigate } = mount(refMarketing.current, {
      onNavigate: ({ pathname: route }) => {
        const { pathname } = history.location;
        if (pathname !== route) return history.push(route);
      },
    });
    history.listen(onParentNavigate);
  });
  // ref e um objeto
  return <div ref={refMarketing} />;
};
