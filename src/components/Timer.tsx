import React from 'react';
import { useTimer } from '../hooks/useTimer';

export function Timer({ estimatedTime }: { estimatedTime: number }) {
  const { minutes, seconds } = useTimer(estimatedTime);

  return (
    <div className="flex gap-4 text-4xl font-bold text-amber-800">
      <div className="bg-amber-100 rounded-lg p-4 min-w-[100px] text-center">
        <span>{String(minutes).padStart(2, '0')}</span>
        <p className="text-sm font-normal text-amber-700">Minutos</p>
      </div>
      <div className="bg-amber-100 rounded-lg p-4 min-w-[100px] text-center">
        <span>{String(seconds).padStart(2, '0')}</span>
        <p className="text-sm font-normal text-amber-700">Segundos</p>
      </div>
    </div>
  );
}