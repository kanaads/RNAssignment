/**
 * Model for the state of a button
 */
export interface ButtonState {
  readonly count: number;
  readonly label: string;
  readonly isActive: boolean;
}

/**
 * Function to create a new ButtonState
 */
export const createButtonState = (
  count: number = 0,
  label: string = '',
  isActive: boolean = true
): ButtonState => ({
  count,
  label,
  isActive,
});

/**
 * Time handling
 */
export const getPluralForm = (count: number): string => 
  count === 1 ? 'time' : 'times';
