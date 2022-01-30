import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
`;

export const Title = styled(Link)`
  font-size: 17px;
  line-height: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 7px 0px;
  width: 70px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

export const TitleButton = styled(Link)`
  font-size: 13px;
  line-height: 17px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`;
