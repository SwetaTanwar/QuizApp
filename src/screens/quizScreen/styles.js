import styled from "styled-components";

import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export const QuizContainer = styled.View`
  background-color: ${COLORS.BG_COLOR};
  flex: 1;
  justify-content: space-between;
  padding-top: 24px;
  ${_ => _.isQuizFinished ? 'opacity: 0.2' : ''}
`;

export const PaddingHorizontal = styled.View`
  padding-horizontal: 24px;
`;

export const QuestionContainer = styled.View`
  margin-top: 26px;
`;

export const SolutionsContainer = styled.View`
  margin-top: 32px;
`;

export const QuestionText = styled.Text`
  font-family: ${FONTS.bold};
  color: ${COLORS.BLACK_TEXT};
  letter-spacing: -0.01px;
  line-height: 32px;
  font-size: 24px;
`;

export const OptionsContainer = styled.View`
  margin-top: 32px;
`;
