import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const refMarketing = useRef(null);
  const history = useHistory();

  //estamos criando um objeto para lidar com navegação entre filho
  //e o pai,agora a funcao mount recebe dois parâmetro, um elemento html
  //e um objeto que contem as funções de navegação
  useEffect(() => {
    console.log(history.location.pathname);
    const { onParentNavigate } = mount(refMarketing.current, {
      initialPathName: history.location.pathname,
      onNavigate: ({ pathname: route }) => {
        const { pathname } = history.location;
        if (pathname !== route) {
          history.push(route);
        }
      },
    });
    history.listen(onParentNavigate);
  });
  // ref e um objeto
  return <div ref={refMarketing} />;
};
