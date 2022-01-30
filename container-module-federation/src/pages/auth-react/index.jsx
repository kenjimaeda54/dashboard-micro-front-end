import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const refAuth = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(refAuth.current, {
      //ele vai pegar a path atual que esta no histórico do browser
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

  return <div ref={refAuth} />;
};
