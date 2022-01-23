import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
      padding: 0px;
      margin: 0px;
      outline: 0px;
      box-sizing: border-box;
      font-family: 'Be Vietnam Pro', sans-serif;

  }

  html,body, #root{
      height: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};
  }

  *,button,input{
       border: none;

  }
`;
