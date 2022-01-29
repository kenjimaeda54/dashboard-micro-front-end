import styled from "styled-components";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 20px 50px;
  gap: 55px;
  margin-top: 50px;
  height: 100%;
`;

export const WrapContainer = styled.div`
  display: flex;
  gap: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 620px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const EffectIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.red};
`;

export const Icon = styled(GiPadlock)`
  color: ${({ theme }) => theme.colors.primary};
  width: 25px;
  height: 25px;
`;

export const Title = styled.h2`
  font-size: 27px;
  line-height: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 17px;
  gap: 25px;
  width: 100%;
`;

export const WrapTopInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const WrapArticleCheckBox = styled.div`
  display: flex;
  gap: 15px;
  width: 60%;
  align-items: center;
  justify-content: flex-end;
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0, 7;
  }
`;

export const TitleCheckBox = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 11px 0px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;

export const TitleButton = styled.span`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.blue};
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const FooterTitle = styled.p`
  font-size: 13px;
  line-height: 17px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.blue};
`;
