import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('common/components/confirmation-dialog/ConfirmationDialogComponent', () => {
  it('should not render passing isOpen as false property', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should render as expected passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: '',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should render title as expected passing title property', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
      children: '',
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('should render children as expected passing children property', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: '',
        acceptButton: '',
      },
    };

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        <p>Test children</p>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.getByText('Test children')).toBeInTheDocument();
  });

  it('should call onClose when Close button is clicked', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const closeButton = screen.getByText(props.labels.closeButton);
    await userEvent.click(closeButton);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onAccept and onClose when Accept button is clicked', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'test title',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Accept',
      },
      children: '',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const acceptButton = screen.getByText(props.labels.acceptButton);
    await userEvent.click(acceptButton);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
