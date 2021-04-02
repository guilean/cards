import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  metadata?: {
    eventName: string;
    eventProperties?: Object;
  };
};
