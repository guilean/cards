import { render } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';

describe('Card', () => {
  it('should render title, image and description', () => {
    const { container } = render(
      <Card
        title='title'
        image='image'
        description='description'
        afterLoad={() => {}}
      />,
    );
    expect(container.firstChild).toHaveAttribute('alt', 'title description');
    expect(container.firstChild).toHaveAttribute('src', 'image');
  });
});
