import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TitleHeader,
  TitleColor,
  WrapContainer,
  Title,
  WrapParagraph,
  Button,
  TitleButton,
} from "./styles";

export const CardPricing = (props) => {
  return (
    <Container>
      <TitleHeader> {props.title} </TitleHeader>
      <WrapContainer>
        <Title>
          $ {props.price} <TitleColor>/mo</TitleColor>
        </Title>
        <WrapParagraph>{props.users}</WrapParagraph>
        <WrapParagraph>{props.storage} </WrapParagraph>
        <WrapParagraph>{props.helpCenter}</WrapParagraph>
        <WrapParagraph>{props.typeEmail} </WrapParagraph>
      </WrapContainer>
      <Button>
        <TitleButton to="auth/login">{props.titleButton}</TitleButton>
      </Button>
    </Container>
  );
};
