import React from "react";
import { InputBig } from "../../components/input-big";
import {
  Container,
  WrapContainer,
  EffectIcon,
  Header,
  Title,
  Icon,
  Form,
  WrapTopInput,
  Article,
  WrapArticleCheckBox,
  CheckBox,
  TitleCheckBox,
  Footer,
  Button,
  TitleButton,
  ButtonLink,
  FooterTitle,
} from "./styles";

export const SignUp = () => {
  return (
    <Container>
      <WrapContainer>
        <Header>
          <EffectIcon>
            <Icon />
          </EffectIcon>
          <Title>Sing Up</Title>
        </Header>
        <Form>
          <WrapTopInput>
            <InputBig customWidth={45} placeholder="First Name" type="text" />
            <InputBig customWidth={45} placeholder="Last Name" type="text" />
          </WrapTopInput>
          <InputBig placeholder="Email Address**" type="email" />
          <InputBig placeholder="Password**" type="password" />
        </Form>
        <Article>
          <WrapArticleCheckBox>
            <CheckBox type="checkbox" />
            <TitleCheckBox>
              I want to receive inspiration,marketing promotions and updates via
              email
            </TitleCheckBox>
          </WrapArticleCheckBox>
          <Footer>
            <Button>
              <TitleButton>Sing Up</TitleButton>
            </Button>
            <ButtonLink to="/auth/signin/">
              Already have an account? Sing in
            </ButtonLink>
          </Footer>
        </Article>
        <FooterTitle>Copyright@ Your Website 2020.</FooterTitle>
      </WrapContainer>
    </Container>
  );
};
