import React, { useEffect, useState } from 'react'

const QuestionTimer = ({ timeout, onTimeOut }) => {

  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [onTimeOut, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id='question-time' max={timeout} value={remainingTime} />
  );

}

export default QuestionTimer