import { AccessibilityInfo } from 'react-native';
import { ACCESSIBILITY } from '../constants';

/**
 * Service for handling accessibility features
 */
export class AccessibilityService {
  /**
   * Announces a message to screen readers
   */
  static announceForAccessibility(message: string): void {
    AccessibilityInfo.announceForAccessibility?.(message);
  }

  /**
   * Announces popup opening
   */
  static announcePopupOpening(): void {
    this.announceForAccessibility(ACCESSIBILITY.POPUP_ANNOUNCEMENT);
  }

  /**
   * Announces button press
   */
  static announceButtonPress(buttonLabel: string): void {
    this.announceForAccessibility(`Button pressed: ${buttonLabel}`);
  }
}
