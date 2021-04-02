import { screen } from '@testing-library/react';
import React from 'react';
import { render } from '~test-utils';
import { CardDetailPreview } from './CardDetailPreview';

describe('CardDetailPreview', () => {
  it('should render preview', () => {
    render(
      <CardDetailPreview
        name='name'
        _id='id'
        imageUrl='imageUrl'
        count={{ total: 0 }}
      />,
    );
    screen.getByText(/original card/i);
  });
});
