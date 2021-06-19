import React, { useEffect, useState } from "react";

import {
  ProgressBarContainer,
  CrossIconContainer,
  CrossIcon,
  ProgressBarOuterView,
  ProgressBarInnerView,
  ProgressStatus,
  ProgressStatusText,
} from "./styles";

export default function ProgressBar({ onClose, currentQuestion, totalQuestions }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressVal = currentQuestion * 100 / totalQuestions;
    setProgress(progressVal);
  }, [currentQuestion]);

  return <ProgressBarContainer>
    <CrossIconContainer onPress={onClose}>
      <CrossIcon>x</CrossIcon>
    </CrossIconContainer>
    <ProgressBarOuterView><ProgressBarInnerView progress={progress} /></ProgressBarOuterView>
    <ProgressStatus><ProgressStatusText>{`${currentQuestion}/${totalQuestions}`}</ProgressStatusText></ProgressStatus>
  </ProgressBarContainer>;
}
