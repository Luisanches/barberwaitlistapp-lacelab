import { useState, useCallback } from 'react';
import { WaitlistItem } from '../types/waitlist';
import { TIMER_CONSTANTS } from '../constants/timer';

export function useQueueManager() {
  const [queue, setQueue] = useState<WaitlistItem[]>([]);

  const addToQueue = useCallback((name: string, phone: string) => {
    const newItem: WaitlistItem = {
      id: Date.now(),
      name,
      phone,
      estimatedTime: (queue.length + 1) * TIMER_CONSTANTS.DEFAULT_DURATION,
    };
    setQueue((prev) => [...prev, newItem]);
  }, [queue.length]);

  const removeFromQueue = useCallback((id: number, resetTimer?: () => void) => {
    setQueue((prevQueue) => {
      const index = prevQueue.findIndex(item => item.id === id);
      if (index === 0 && resetTimer) {
        resetTimer();
      }
      return prevQueue.filter(item => item.id !== id);
    });
  }, []);

  const handleExpiredUser = useCallback(() => {
    setQueue((prevQueue) => prevQueue.slice(1));
  }, []);

  return {
    queue,
    addToQueue,
    removeFromQueue,
    handleExpiredUser,
  };
}