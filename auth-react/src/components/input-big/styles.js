import styled from "styled-components";

export const Input = styled.input`
  display: flex;
  width: ${({ customWidth }) => (customWidth ? customWidth : 100)}%;
  border: 0.05px solid ${({ theme }) => theme.colors.blackLight};
  border-radius: 4px;
  padding: 20px 7px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;
