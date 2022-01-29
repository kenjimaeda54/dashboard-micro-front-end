import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const WrapContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitle = styled.p`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 35px;
  background-color: transparent;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TextButton = styled.span`
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.blue};
  }
`;
