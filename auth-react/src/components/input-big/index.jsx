import React from "react";
import { Input } from "./styles";

//para react entender as passagens de props do styled-components
//precisa declarar como dependĂȘncias e nao devDependence
//usando typescript nao tem esse problema
//mas para micro front end faz sentido o styled-components nas dependĂȘncias
export const InputBig = (props) => {
  return <Input {...props} customWidth={props.customWidth} />;
};
