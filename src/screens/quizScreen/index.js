import React, { useState } from "react";

import Options from "./components/options";
import Solution from "./components/solution";

import { data } from "../../constants/questionnaire";
import ProgressBar from "../../components/progressBar";

import { showAlert } from "../../utils";

import {
  OptionsContainer,
  PaddingHorizontal,
  QuestionContainer,
  QuestionText,
  QuizContainer,
  SolutionsContainer,
} from "./styles";

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [isAnswerGiven, setIsAnswerGiven] = useState(false)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [score, setScore] = useState(0)

  function resetQuiz () {
    setCurrentQuestionIndex(0)
    setIsAnswerCorrect(false)
    setIsAnswerGiven(false)
    setQuizFinished(false)
    setIsAnswerSubmitted(false)
    setScore(0)
  }

  return <QuizContainer isQuizFinished={quizFinished} pointerEvents={quizFinished ? 'none' : 'auto'}>
    <PaddingHorizontal>
      <ProgressBar currentQuestion={currentQuestionIndex+1} totalQuestions={data.length} onClose={onQuizCloseTapped}/>
      <QuestionContainer>
        <QuestionText>{data[currentQuestionIndex].title}</QuestionText>
      </QuestionContainer>
      <OptionsContainer>
        <Options
          isAnswerSubmitted={isAnswerSubmitted}
          data={data[currentQuestionIndex].options}
          answer={data[currentQuestionIndex].answer}
          onSelection={onAnswerSelection} />
      </OptionsContainer>
    </PaddingHorizontal>
    <SolutionsContainer>
      <Solution
        onCheckTap={onCheckBtnTapped}
        onContinueTap={onContinueBtnTapped}
        correctAnswer={data[currentQuestionIndex].answer.value}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSubmitted={isAnswerGiven}/>
    </SolutionsContainer>
  </QuizContainer>;

  function onAnswerSelection (answer) {
    if (answer) setScore(prevScore => prevScore + 1)
    setIsAnswerCorrect(answer)
    setIsAnswerGiven(true)
  }

  function onCheckBtnTapped () {
    setIsAnswerSubmitted(true)
  }

  function onContinueBtnTapped () {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setIsAnswerCorrect(false);
      setIsAnswerGiven(false);
      setIsAnswerSubmitted(false)
    } else {
      setQuizFinished(true)
      showScore()
    }
  }

  function showScore() {
    showAlert('Quiz Finished!', `You scored: ${score}/${data.length}`, true, resetQuiz)
  }

  function onQuizCloseTapped () {
    setQuizFinished(true)
    showAlert('Quit!', 'Are you sure you want to quit?',false, resetQuiz, dismissAlert)
  }

  function dismissAlert() {
    setQuizFinished(false)
  }

}
