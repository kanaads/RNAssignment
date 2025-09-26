import { useState, useCallback } from 'react';
import { AppState, createInitialAppState } from '../models/AppState';
import { StateService } from '../services/StateService';
import { AccessibilityService } from '../services/AccessibilityService';
import { IViewModel, StateChangeCallback } from '../types/ViewModelTypes';

/**
  Main ViewModel implementing MVVM pattern
 */
export class MainViewModel implements IViewModel {
  private _state: AppState;
  private _stateChangeCallback?: StateChangeCallback;

  constructor(initialState?: AppState) {
    this._state = initialState || createInitialAppState();
  }
  
  get state(): AppState {
    return this._state;
  }

  setStateChangeCallback(callback: StateChangeCallback): void {
    this._stateChangeCallback = callback;
  }

  private updateState(newState: AppState): void {
    this._state = newState;
    this._stateChangeCallback?.(newState);
  }

  incrementFirstButton(): void {
    const newCount = this._state.firstButton.count + 1;
    // Increment first button and reset second button to zero
    const stateAfterFirst = StateService.updateFirstButton(this._state, newCount);
    const stateAfterResetSecond = StateService.updateSecondButton(stateAfterFirst, 0);
    this.updateState(stateAfterResetSecond);
    AccessibilityService.announceButtonPress('First Button');
  }

  incrementSecondButton(): void {
    const newCount = this._state.secondButton.count + 1;
    // Increment second button and reset first button to zero
    const stateAfterSecond = StateService.updateSecondButton(this._state, newCount);
    const stateAfterResetFirst = StateService.updateFirstButton(stateAfterSecond, 0);
    this.updateState(stateAfterResetFirst);
    AccessibilityService.announceButtonPress('Second Button');
  }

  openModal(): void {
    // Open modal and reset both button counts to zero
    const stateWithModal = StateService.updateModal(this._state, true);
    const stateResetFirst = StateService.updateFirstButton(stateWithModal, 0);
    const stateResetBoth = StateService.updateSecondButton(stateResetFirst, 0);
    this.updateState(stateResetBoth);
    AccessibilityService.announcePopupOpening();
  }

  closeModal(): void {
    const newState = StateService.updateModal(this._state, false);
    this.updateState(newState);
  }
}

/**
 * Custom hook for using the MainViewModel in React components
 */
export const useMainViewModel = (): IViewModel => {
  const [viewModel] = useState(() => new MainViewModel());
  const [state, setState] = useState(viewModel.state);

  useState(() => {
    viewModel.setStateChangeCallback(setState);
  });

  return {
    state,
    incrementFirstButton: useCallback(() => viewModel.incrementFirstButton(), [viewModel]),
    incrementSecondButton: useCallback(() => viewModel.incrementSecondButton(), [viewModel]),
    openModal: useCallback(() => viewModel.openModal(), [viewModel]),
    closeModal: useCallback(() => viewModel.closeModal(), [viewModel]),
  };
};
 