import React from 'react';
import { TimerDisplay } from './TimerDisplay';
import { WaitlistItem } from '../types/waitlist';
import { TimerState } from '../constants/timer';

interface CurrentCustomerProps {
  currentCustomer: WaitlistItem | undefined;
  timerInfo: {
    minutes: number;
    seconds: number;
    timerState: TimerState;
    progress: number;
  };
}

export function CurrentCustomer({ currentCustomer, timerInfo }: CurrentCustomerProps) {
  if (!currentCustomer) return null;

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-semibold text-amber-900">
        Tempo restante para o cliente atual
      </h2>
      <TimerDisplay {...timerInfo} />
      <p className="text-amber-700">
        Cliente atual: {currentCustomer.name}
      </p>
    </div>
  );
}