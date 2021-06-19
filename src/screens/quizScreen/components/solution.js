import React, { useEffect, useState } from "react";

import {
  AnswerContainer,
  AnswerText,
  CheckSolutionContainer,
  CheckSolutionText,
  ContinueBtn,
  ContinueText,
  CorrectAnswerText
} from "./styles";

export default function Solution({ isAnswerCorrect, isAnswerSubmitted, correctAnswer, onCheckTap, onContinueTap }) {
  const [isCheckBtnTapped, setIsCheckBtnTapped] = useState(false);
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (isCheckBtnTapped)  {
      let interval = setInterval(() => {
        setCount(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          return lastTimerCount - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isCheckBtnTapped]);

  useEffect(() => {
    if (count === 0) {
      onContinueBtnTap()
    }
  }, [count])

  return !isCheckBtnTapped
    ? _renderCheckSolution()
    : _renderSolution();

  function _renderCheckSolution() {
    return <CheckSolutionContainer onPress={onCheckBtnTap}>
      <CheckSolutionText>Check</CheckSolutionText>
    </CheckSolutionContainer>;
  }

  function _renderSolution() {
    return <AnswerContainer isCorrect={isAnswerCorrect}>
      <AnswerText isCorrect={isAnswerCorrect}>{isAnswerCorrect ? "Awesome!" : "Correct Answer:"}</AnswerText>
      {!isAnswerCorrect && <CorrectAnswerText>{correctAnswer}</CorrectAnswerText>}
      <ContinueBtn isCorrect={isAnswerCorrect} onPress={onContinueBtnTap}>
        <ContinueText>Continue</ContinueText>
      </ContinueBtn>
    </AnswerContainer>;
  }

  function onCheckBtnTap() {
    if (!isAnswerSubmitted) {
      alert("Select an answer to proceed!");
    } else {
      setIsCheckBtnTapped(true);
      onCheckTap(true)
    }
  }

  function onContinueBtnTap () {
    onContinueTap(true)
    setIsCheckBtnTapped(false)
    setCount(3)
  }
}
