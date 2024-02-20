import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { Config } from 'react-promise-tracker';
import * as reactPromiseTracker from 'react-promise-tracker/lib/trackerHook';

describe('common/components/spinner/SpinnerComponent', () => {
  it('should not render passing promiseInProgress as false', () => {
    // Arrange
    const usePromiseTrackerStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => {
        return { promiseInProgress: false };
      });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('should render passing promiseInProgress as true', () => {
    // Arrange
    const usePromiseTrackerStub = jest
      .spyOn(reactPromiseTracker, 'usePromiseTracker')
      .mockImplementation(() => {
        return { promiseInProgress: false };
      });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });
});
