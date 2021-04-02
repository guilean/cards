import React from 'react';
import { useAnalytics } from '~analytics';
import { Props } from './Button.types';

export const Button = ({
  children,
  onClick,
  metadata,
  className,
  type = 'button',
  ...rest
}: Props) => {
  const { sendEvent } = useAnalytics();
  const onClickButton = () => {
    // Only sends events when metadata is received
    metadata && sendEvent(metadata.eventName, metadata.eventProperties);
    onClick && onClick();
  };
  return (
    <button className={className} onClick={onClickButton} type={type} {...rest}>
      {children}
    </button>
  );
};
