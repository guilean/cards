import React from 'react';
import { Props } from './Layout.types';

export const Layout = ({ children }: Props) => (
  <div className='bg-gray-900 h-full p-4 md:p-8 overflow-auto'>{children}</div>
);
