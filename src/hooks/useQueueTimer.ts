import { useState, useEffect, useCallback, useRef } from 'react';
import { TIMER_CONSTANTS, TIMER_STATES, TimerState } from '../constants/timer';

interface TimerInfo {
  minutes: number;
  seconds: number;
  timerState: TimerState;
  progress: number;
}

export function useQueueTimer(isActive: boolean, onExpire: () => void) {
  const [timeLeft, setTimeLeft] = useState<number>(TIMER_CONSTANTS.DEFAULT_DURATION);
  const [timerState, setTimerState] = useState<TimerState>(TIMER_STATES.NORMAL);
  const expireTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    setTimeLeft(TIMER_CONSTANTS.DEFAULT_DURATION);
    setTimerState(TIMER_STATES.NORMAL);
    if (expireTimeoutRef.current) {
      clearTimeout(expireTimeoutRef.current);
      expireTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isActive) {
      resetTimer();
      return;
    }

    // Set up expiration timeout
    expireTimeoutRef.current = setTimeout(() => {
      setTimerState(TIMER_STATES.EXPIRED);
      onExpire();
    }, timeLeft * 1000);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, TIMER_CONSTANTS.TICK_INTERVAL);

    return () => {
      clearInterval(interval);
      if (expireTimeoutRef.current) {
        clearTimeout(expireTimeoutRef.current);
      }
    };
  }, [isActive, onExpire, resetTimer, timeLeft]);

  useEffect(() => {
    if (timeLeft <= TIMER_CONSTANTS.WARNING_THRESHOLD && timeLeft > 0) {
      setTimerState(TIMER_STATES.WARNING);
    } else if (timeLeft > TIMER_CONSTANTS.WARNING_THRESHOLD) {
      setTimerState(TIMER_STATES.NORMAL);
    }
  }, [timeLeft]);

  const timerInfo: TimerInfo = {
    minutes: Math.floor(timeLeft / 60),
    seconds: timeLeft % 60,
    timerState,
    progress: (timeLeft / TIMER_CONSTANTS.DEFAULT_DURATION) * 100,
  };

  return { timerInfo, resetTimer };
}