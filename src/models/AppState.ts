import { ButtonState } from './ButtonState';
import { ModalState } from './ModalState';

/**
 * Main application state model
 */
export interface AppState {
  readonly firstButton: ButtonState;
  readonly secondButton: ButtonState;
  readonly modal: ModalState;
}

/**
 * Factory function to create initial app state
 */
export const createInitialAppState = (): AppState => ({
  firstButton: {
    count: 0,
    label: "You've clicked this\nbutton 0 times",
    isActive: true,
  },
  secondButton: {
    count: 0,
    label: "You've clicked this\nbutton 0 times",
    isActive: true,
  },
  modal: {
    isVisible: false,
    title: 'Congratulations!',
    message: 'You clicked the popup button!',
  },
});
