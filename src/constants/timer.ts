export const TIMER_CONSTANTS = {
    DEFAULT_DURATION: 100, // 5 minutes in seconds
    WARNING_THRESHOLD: 30, // Show warning when 30 seconds remain
    TICK_INTERVAL: 1000, // Update every second
  } as const;
  
  export const TIMER_STATES = {
    NORMAL: 'normal',
    WARNING: 'warning',
    EXPIRED: 'expired',
  } as const;
  
  export type TimerState = typeof TIMER_STATES[keyof typeof TIMER_STATES];