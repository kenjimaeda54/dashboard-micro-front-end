import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  gap: 20px;
`;

export const TitleHeader = styled.h2`
  padding: 10px 0px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h3`
  font-size: 21px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TitleColor = styled.span`
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const WrapParagraph = styled.span`
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Button = styled.button`
  margin-bottom: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const TitleButton = styled(Link)`
  font-size: 17px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayDark};
  text-decoration: none;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.grayDark};
  }
`;
