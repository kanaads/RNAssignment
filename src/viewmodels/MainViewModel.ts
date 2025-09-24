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
    const newState = StateService.updateFirstButton(this._state, newCount);
    this.updateState(newState);
    AccessibilityService.announceButtonPress('First Button');
  }

  incrementSecondButton(): void {
    const newCount = this._state.secondButton.count + 1;
    const newState = StateService.updateSecondButton(this._state, newCount);
    this.updateState(newState);
    AccessibilityService.announceButtonPress('Second Button');
  }

  openModal(): void {
    const newState = StateService.updateModal(this._state, true);
    this.updateState(newState);
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
