import { AppState } from '../models/AppState';
import { ButtonState } from '../models/ButtonState';
import { ModalState } from '../models/ModalState';
import { getPluralForm } from '../models/ButtonState';

/**
 * Service for managing application state changes
 */
export class StateService {
  /**
   * Updates button state with new count
   */
  static updateButtonState(
    currentState: ButtonState,
    newCount: number
  ): ButtonState {
    return {
      ...currentState,
      count: newCount,
      label: `You've clicked this\nbutton ${newCount} ${getPluralForm(newCount)}`,
    };
  }

  /**
   * Updates modal visibility
   */
  static updateModalVisibility(
    currentState: ModalState,
    isVisible: boolean
  ): ModalState {
    return {
      ...currentState,
      isVisible,
    };
  }

  /**
   * Creates a new app state with updated first button
   */
  static updateFirstButton(state: AppState, newCount: number): AppState {
    return {
      ...state,
      firstButton: this.updateButtonState(state.firstButton, newCount),
    };
  }

  /**
   * Creates a new app state with updated second button
   */
  static updateSecondButton(state: AppState, newCount: number): AppState {
    return {
      ...state,
      secondButton: this.updateButtonState(state.secondButton, newCount),
    };
  }

  /**
   * Creates a new app state with updated modal
   */
  static updateModal(state: AppState, isVisible: boolean): AppState {
    return {
      ...state,
      modal: this.updateModalVisibility(state.modal, isVisible),
    };
  }
}
