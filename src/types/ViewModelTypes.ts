import { AppState } from '../models/AppState';

/**
 * ViewModel interface for state management
 */
export interface IViewModel {
  readonly state: AppState;
  readonly incrementFirstButton: () => void;
  readonly incrementSecondButton: () => void;
  readonly openModal: () => void;
  readonly closeModal: () => void;
}

/**
 * State change callback type
 */
export type StateChangeCallback = (newState: AppState) => void;
