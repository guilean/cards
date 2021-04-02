import { createContext } from 'react';
import { AnalyticsContextProps } from './types';

export const AnalyticsContext = createContext<AnalyticsContextProps>({
  sendEvent: () => null,
});
