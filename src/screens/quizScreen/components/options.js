import React, { useEffect, useState } from "react";

import OptionsRow from "./optionsRow";

import { OptionsInnerContainer, OptionsRowTouchableComponent } from "./styles";

export default function Options({ data, answer, onSelection, isAnswerSubmitted }) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(-1);

  useEffect(() => {
    setSelectedAnswerId(-1);
  }, [data]);

  return <OptionsInnerContainer>
    {data.map((item, index) => _renderRow(item, index))}
  </OptionsInnerContainer>;

  function _renderRow(item, index) {
    const onRowTapped = () => rowTapped(item.id);
    const isSelected = selectedAnswerId === item.id;

    return <OptionsRowTouchableComponent onPress={onRowTapped} key={index}>
      <OptionsRow data={item} index={index} isSelected={isSelected} />
    </OptionsRowTouchableComponent>;
  }

  function rowTapped(id) {
    if (isAnswerSubmitted) return;
    setSelectedAnswerId(id);
    onSelection(id === answer.id);
  }
}
