import React from "react";
import { CardPricing } from "../../components/card-pricing";
import {
  Container,
  Title,
  WrapDescription,
  Description,
  Section,
} from "./styles";

export const Pricing = () => {
  return (
    <Container>
      <Title>Home Page</Title>
      <WrapDescription>
        <Description>
          Something short and leading about the collection below- its
          content,the creator,etc.Make it short and sweet,but not too short so
          folks dont simply skip over it entirely
        </Description>
      </WrapDescription>
      <Section>
        <CardPricing
          title="Free"
          price="0"
          users="10 users included"
          storage="2 GB of storage"
          helpCenter="Help center access"
          typeEmail="Email support"
          titleButton="SING UP FOR FREE"
        />
        <CardPricing
          title="Pro"
          price="15"
          users="20 users included"
          storage="10 GB of storage"
          helpCenter="Help center access"
          typeEmail="Priority email support"
          titleButton="GET STARTED"
        />
        <CardPricing
          title="Enterprise"
          price="30"
          users="50 users included"
          storage="30 GB of storage"
          helpCenter="Help center access"
          typeEmail="Phone e Email support"
          titleButton="CONTACT US"
        />
      </Section>
    </Container>
  );
};
