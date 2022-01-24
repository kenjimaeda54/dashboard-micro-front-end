import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 20px 50px;
  gap: 55px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  width: 60%;
  font-size: 19px;
  line-height: 25px;
  font-weight: 400;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;
