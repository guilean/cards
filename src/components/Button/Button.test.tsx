import React from 'react';
import { useAnalytics } from '~analytics';
import { fireEvent, render, screen } from '~test-utils';
import { Button } from './Button';

jest.mock('~analytics');

describe('Button', () => {
  const mockUseAnalytics = useAnalytics as jest.Mock;
  const mockSendEvent = jest.fn();
  beforeEach(() => {
    mockUseAnalytics.mockReturnValue({ sendEvent: mockSendEvent });
  });
  it('should render children', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>foo</Button>);
    screen.getByText(/foo/i);
  });
  it('should render classname', () => {
    render(<Button className='foo'>foo</Button>);
    const button = screen.getByText(/foo/i);
    expect(button).toHaveClass('foo');
  });
  it('should call onClick', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>foo</Button>);
    const button = screen.getByText(/foo/i);
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it('should call sendEvent when metadata exists', () => {
    render(
      <Button metadata={{ eventName: 'foo', eventProperties: 'foo' }}>
        foo
      </Button>,
    );
    const button = screen.getByText(/foo/i);
    fireEvent.click(button);
    expect(mockSendEvent).toHaveBeenCalledTimes(1);
    expect(mockSendEvent).toBeCalledWith('foo', 'foo');
  });
});
