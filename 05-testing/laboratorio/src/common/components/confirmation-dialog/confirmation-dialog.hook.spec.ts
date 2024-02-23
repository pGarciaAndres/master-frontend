import { renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';
import { act } from 'react-dom/test-utils';

describe('common/components/confirmation-dialog/useConfirmationDialog', () => {
  it('should return an object with initial values', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current).toEqual({
      isOpen: false,
      itemToDelete: {
        id: '',
        name: '',
      },
      onAccept: expect.any(Function),
      onClose: expect.any(Function),
      onOpenDialog: expect.any(Function),
    });
  });

  it('should update isOpen and itemToDelete when onOpenDialog is called', () => {
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should turn isOpen false when onClose is called', () => {
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toBeFalsy();
  });

  it('should clean itemToDelete when onAccept is called', () => {
    // Arrange
    const item: Lookup = {
      id: '1',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });
});
