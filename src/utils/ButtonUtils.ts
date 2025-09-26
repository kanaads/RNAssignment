import { ButtonConfig } from '../types/ButtonTypes';
import { BUTTON_COLORS } from '../constants';

/**
 * Utility functions for button configuration
 */
export class ButtonUtils {
  /**
   * Creates button configuration for orange button
   */
  static createOrangeButtonConfig(testID?: string): ButtonConfig {
    return {
      color: BUTTON_COLORS.ORANGE,
      shadowColor: BUTTON_COLORS.ORANGE_SHADOW,
      testID,
    };
  }

  /**
   * Creates button configuration for green button
   */
  static createGreenButtonConfig(testID?: string): ButtonConfig {
    return {
      color: BUTTON_COLORS.GREEN,
      shadowColor: BUTTON_COLORS.GREEN_SHADOW,
      testID,
    };
  }

  /**
   * Creates button configuration for purple button
   */
  static createPurpleButtonConfig(testID?: string): ButtonConfig {
    return {
      color: BUTTON_COLORS.PURPLE,
      shadowColor: BUTTON_COLORS.PURPLE_SHADOW,
      testID,
    };
  }
}
