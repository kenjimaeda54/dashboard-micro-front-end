import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
  padding: 20px 50px;
  gap: 55px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapSubTitle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SubWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  flex-direction: column;
  gap: 20px;
`;

export const Description = styled.p`
  font-size: 19px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapButton = styled.div`
  display: flex;
  width: 100%;
  gap: 35px;
  align-items: center;
  justify-content: space-around;
`;

export const TitleButton = styled(Link)`
  text-decoration: none;
  font-size: 19px;
  line-height: 25px;
  text-align: center;
  color: ${({ userClick, theme }) =>
    userClick ? theme.colors.blue : theme.colors.primary};
  font-weight: 300;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 5px;
  width: 90px;
  border-radius: 5px;
  background-color: ${({ userClick, theme }) =>
    userClick ? "transparent" : theme.colors.blue};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  // https://getcssscan.com/css-box-shadow-examples
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  ${({ isClicked }) =>
    isClicked &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.blue};
    `};
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-row-gap: 20px;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const TitleFooter = styled.h6`
  font-size: 19px;
  line-height: 25px;
  font-weight: 400;
`;

export const DescriptionFooter = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
`;

export const Finally = styled.span`
  font-size: 12px;
  line-height: 17px;
  font-weight: 300;
`;
