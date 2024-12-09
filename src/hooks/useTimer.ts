import { useState, useEffect, useCallback } from 'react';

export function useTimer(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  // Reset timer when initialSeconds changes
  useEffect(() => {
    setTimeLeft(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reset timer when it reaches zero
      setTimeLeft(initialSeconds);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, initialSeconds]);

  return {
    minutes: Math.floor(timeLeft / 60),
    seconds: timeLeft % 60,
  };
}