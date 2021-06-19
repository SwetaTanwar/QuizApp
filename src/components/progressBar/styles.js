import styled from "styled-components";
import { FONTS } from "../../constants/fonts";
import { COLORS } from "../../constants/colors";

export const ProgressBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CrossIconContainer = styled.TouchableOpacity`
  width: 10%;
`;

export const CrossIcon = styled.Text`
  font-size: 20px;
  font-family: ${FONTS.bold};
`;

export const ProgressBarOuterView = styled.View`
  height: 8px;
  width: 78%;
  border-radius: 24px;
  background-color: ${COLORS.GRAY_BG};
`;

export const ProgressBarInnerView = styled.View`
  width: ${_ => _.progress}%;
  height: 8px;
  border-radius: 24px;
  background-color: ${COLORS.GREEN_50};
`;

export const ProgressStatus = styled.View`
  width: 12%;
  align-items: flex-end;
`;

export const ProgressStatusText = styled.Text`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.12px;
`;
