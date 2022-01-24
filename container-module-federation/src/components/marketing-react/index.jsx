import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketApp';

export default () => {
  const refMarketing = useRef(null);

  useEffect(() => {
    mount(refMarketing.current);
  });
  // ref e um objeto
  return <div ref={refMarketing} />;
};
