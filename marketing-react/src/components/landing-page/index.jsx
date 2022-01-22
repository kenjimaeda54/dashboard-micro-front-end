import React from "react";
import { Container, Title, WrapSubTitle, Description } from "./styles";

const LandingPage = () => {
  return (
    <Container>
      <Title>Home Page</Title>
      <WrapSubTitle>
        <Description>
          Something short and leading about the collection below- its
          content,the creator,etc.Make it short and sweet,but not too short so
          folks dont simply skip over it entirely
        </Description>
      </WrapSubTitle>
    </Container>
  );
};

export default LandingPage;
