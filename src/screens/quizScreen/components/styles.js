import styled from "styled-components";
import { FONTS } from "../../../constants/fonts";
import { COLORS } from "../../../constants/colors";

export const OptionsInnerContainer = styled.View`
`;

export const OptionsRowContainer = styled.View`
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${_ => _.isSelected ? COLORS.YELLOW_0A : COLORS.WHITE};
`;

export const OptionsRowTouchableComponent = styled.TouchableOpacity`

`;

export const OptionsText = styled.Text`
  font-family: ${FONTS.semiBold};
  color: ${COLORS.BLACK_TEXT};
  letter-spacing: -0.01px;
  font-size: 16px;
  flex: 1;
  line-height: 24px;
`;

export const RadioButton = styled.View`
  height: 20px;
  width: 20px;
  border-width: 1px;
  margin-left: 2px;
  margin-right: 18px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  border-color: ${_ => _.isSelected ? COLORS.WHITE : COLORS.YELLOW_BA}
`;

export const TickIcon = styled.View`
  transform: rotate(45deg);
  margin-bottom: 2px;
  height: 12px;
  width: 6px;
  border-color: ${COLORS.YELLOW_0A};
  border-bottom-width: 2px;
  border-right-width: 2px;
`;

export const CheckSolutionContainer = styled.TouchableOpacity`
  padding: 16px;
  margin: 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.GREEN_50};
`;

export const CheckSolutionText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.WHITE};
  font-family: ${FONTS.bold};
`;

export const AnswerContainer = styled.View`
  background-color: ${_ => _.isCorrect ? COLORS.GREEN_BG : COLORS.RED_BG};
  padding: 24px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const AnswerText = styled.Text`
  color: ${_ => _.isCorrect ? COLORS.GREEN_5D : COLORS.RED_5D};
  font-size: 20px;
  line-height: 28px;
  font-family: ${FONTS.extraBold};
`;

export const CorrectAnswerText = styled.Text`
  color: ${COLORS.BLACK_TEXT};
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  font-family: ${FONTS.bold};
`;

export const ContinueBtn = styled.TouchableOpacity`
  margin-top: ${_ => _.isCorrect ? "32px" : "24px"};
  background-color: ${_ => _.isCorrect ? COLORS.GREEN_5D : COLORS.RED_5D};
  padding: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ContinueText = styled.Text`
  color: ${COLORS.WHITE};
  font-size: 16px;
  line-height: 24px;
  font-family: ${FONTS.bold};
`;
