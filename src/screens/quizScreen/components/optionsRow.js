import React from "react";

import { OptionsRowContainer, OptionsText, RadioButton, TickIcon } from "./styles";

export default function OptionsRow({ data, index, isSelected }) {
  return <OptionsRowContainer key={index} isSelected={isSelected}>
    <RadioButton isSelected={isSelected}>
      {isSelected && <TickIcon/>}
    </RadioButton>
    <OptionsText>{data.value}</OptionsText>
  </OptionsRowContainer>;
}
