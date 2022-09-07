import { useCallback, useEffect, useRef, useState } from 'react';

function useTimer(maxTime: number) {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<any>(null);

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  const startTimer = () => {
    if (interval.current) {
      stopTimer();
    }

    interval.current = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const resetTimer = useCallback((time?: number) => {
    setTime(time || maxTime);
  }, [maxTime]);

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
  };
}

export default useTimer;
