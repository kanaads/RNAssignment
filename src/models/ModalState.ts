/**
 * Model for the state of a modal
 */
export interface ModalState {
  readonly isVisible: boolean;
  readonly title: string;
  readonly message: string;
}

/**
 * Function to create a new ModalState
 */
export const createModalState = (
  isVisible: boolean = false,
  title: string = '',
  message: string = ''
): ModalState => ({
  isVisible,
  title,
  message,
});
