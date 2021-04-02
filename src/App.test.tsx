import React from 'react';
import { ROUTE_CARDS, ROUTE_CARD_DETAIL } from '~app';
import { renderWithRouter, screen } from '~test-utils';
import App from './App';

describe('App', () => {
  it('should render cards path when accessing root path', () => {
    renderWithRouter(<App />, { route: '/' });
    screen.getByTestId('cards');
  });
  it('should render cards path when accessing cards path', () => {
    renderWithRouter(<App />, { route: ROUTE_CARDS });
    screen.getByTestId('cards');
  });
  it('should render card detail path when accessing card detail path', () => {
    renderWithRouter(<App />, { route: ROUTE_CARD_DETAIL });
    screen.getByTestId('card-detail');
  });
});
