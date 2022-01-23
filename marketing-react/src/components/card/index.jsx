import React from "react";
import {
  Container,
  Image,
  WrapContainer,
  Title,
  SubTitle,
  WrapButton,
  Button,
  TextButton,
} from "./styles";

export const Card = () => {
  //https://picsum.photos/
  return (
    <Container>
      <Image src="https://picsum.photos/200/300" />
      <WrapContainer>
        <Title>Heading</Title>
        <SubTitle>
          This is a media card. You can use this section to describe this
          content
        </SubTitle>
        <WrapButton>
          <Button>
            <TextButton>View</TextButton>
          </Button>
          <Button>
            <TextButton>Edit</TextButton>
          </Button>
        </WrapButton>
      </WrapContainer>
    </Container>
  );
};
