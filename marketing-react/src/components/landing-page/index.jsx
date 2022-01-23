import React from "react";
import { Card } from "../card";
import {
  Container,
  Title,
  WrapSubTitle,
  SubWrap,
  Description,
  WrapButton,
  Button,
  TitleButton,
  Section,
  Footer,
  TitleFooter,
  DescriptionFooter,
  Finally,
} from "./styles";

const LandingPage = () => {
  return (
    <Container>
      <div>
        <Title>Home Page</Title>
        <WrapSubTitle>
          <SubWrap>
            <Description>
              Something short and leading about the collection below- its
              content,the creator,etc.Make it short and sweet,but not too short
              so folks dont simply skip over it entirely
            </Description>
            <WrapButton>
              <Button isClicked={false}>
                <TitleButton isClicked={false}>Pricing</TitleButton>
              </Button>
              <Button isClicked={true}>
                <TitleButton isClicked={true}>Pricing</TitleButton>
              </Button>
            </WrapButton>
          </SubWrap>
        </WrapSubTitle>
        <Section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </div>
      <Footer>
        <TitleFooter> Footer </TitleFooter>
        <DescriptionFooter>
          Something here to give the footer a purpose!
        </DescriptionFooter>
        <Finally>Copyright@ Yor Website 2020</Finally>
      </Footer>
    </Container>
  );
};

export default LandingPage;
