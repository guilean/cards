import { ReactNode } from 'react';

export interface AnalyticsContextProps {
  sendEvent: (eventName: string, eventProperties?: Object) => void;
}

export interface AnalyticsProviderProps {
  children: ReactNode;
}
