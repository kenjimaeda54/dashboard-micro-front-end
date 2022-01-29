import React from "react";
import { InputBig } from "../../components/input-big";
import {
  Container,
  Header,
  EffectIcon,
  Icon,
  Title,
  WrapContainer,
  Form,
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

export const SignIn = () => {
  return (
    <Container>
      <WrapContainer>
        <Header>
          <EffectIcon>
            <Icon />
          </EffectIcon>
          <Title>Sing in</Title>
        </Header>
        <Form>
          <InputBig type="email" placeholder="Email address" />
          <InputBig type="password" placeholder="Password" />
        </Form>
        <Article>
          <WrapArticleCheckBox>
            <CheckBox type="checkbox" />
            <TitleCheckBox>Remember</TitleCheckBox>
          </WrapArticleCheckBox>
          <Footer>
            <Button>
              <TitleButton>Sing Up</TitleButton>
            </Button>
            <ButtonLink to="/auth/signup">
              Don't have an account?Sign up
            </ButtonLink>
          </Footer>
        </Article>
        <FooterTitle>Copyright@ Your Website 2020.</FooterTitle>
      </WrapContainer>
    </Container>
  );
};
