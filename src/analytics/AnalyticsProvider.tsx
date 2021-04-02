import React, { FC } from 'react';
import { sendEvent as sendEventAnalytics1 } from './analytics1';
import { sendEvent as sendEventAnalytics2 } from './analytics2';
import { AnalyticsContext } from './AnalyticsContext';
import { AnalyticsProviderProps } from './types';

export const AnalyticsProvider: FC<AnalyticsProviderProps> = ({ children }) => {
  const sendEvent = (eventName: string, eventProperties?: Object) => {
    sendEventAnalytics1(eventName, eventProperties);
    sendEventAnalytics2(eventName, eventProperties);
  };

  return (
    <AnalyticsContext.Provider value={{ sendEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
