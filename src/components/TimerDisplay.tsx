import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { TIMER_STATES, TimerState } from '../constants/timer';

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  timerState: TimerState;
  progress: number;
}

export function TimerDisplay({ minutes, seconds, timerState, progress }: TimerDisplayProps) {
  const getTimerStyles = () => {
    switch (timerState) {
      case TIMER_STATES.WARNING:
        return 'bg-amber-100 text-red-600 animate-pulse';
      case TIMER_STATES.EXPIRED:
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-amber-100 text-amber-800';
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-amber-200 rounded-lg" style={{ 
        width: `${progress}%`,
        transition: 'width 1s linear'
      }} />
      <div className={`relative flex gap-4 text-4xl font-bold ${getTimerStyles()}`}>
        <div className="rounded-lg p-4 min-w-[100px] text-center backdrop-blur-sm">
          <span>{String(minutes).padStart(2, '0')}</span>
          <p className="text-sm font-normal">Minutos</p>
        </div>
        <div className="rounded-lg p-4 min-w-[100px] text-center backdrop-blur-sm">
          <span>{String(seconds).padStart(2, '0')}</span>
          <p className="text-sm font-normal">Segundos</p>
        </div>
        {timerState === TIMER_STATES.WARNING && (
          <div className="absolute -top-2 -right-2">
            <AlertCircle className="w-6 h-6 text-red-500 animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
}