import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isSingIn, setIsSingIn] = useState(false);

  const onSingIn = () => setIsSingIn((old) => !old);

  return (
    <AuthContext.Provider value={{ onSingIn, isSingIn }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
