/**
 * Button configuration types
 */
export interface ButtonConfig {
  readonly color: string;
  readonly shadowColor: string;
  readonly width?: number;
  readonly height?: number;
  readonly testID?: string;
}

/**
 * Button action types
 */
export type ButtonAction = 'increment' | 'openModal' | 'closeModal';

/**
 * Button press handler type
 */
export type ButtonPressHandler = () => void;
