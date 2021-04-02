import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '~app';

const WithProviders: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const WithRouter: FC = ({ children }) => (
  <WithProviders>
    <BrowserRouter>{children}</BrowserRouter>
  </WithProviders>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: WithProviders, ...options });

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: WithRouter });
};

export * from '@testing-library/react';
export { customRender as render, renderWithRouter };
