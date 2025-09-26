// Button Dimensions
export const BUTTON_DIMENSIONS = {
  DEFAULT_WIDTH: 205,
  DEFAULT_HEIGHT: 75,
  SHADOW_OFFSET: 8,
} as const;

// Modal Constants
export const MODAL_CONSTANTS = {
  WIDTH: 290,
  MIN_HEIGHT: 412,
  BORDER_RADIUS: 8,
  PADDING: 16,
} as const;

// Close Button Constants
export const CLOSE_BUTTON = {
  WIDTH: 27,
  HEIGHT: 26,
  BORDER_RADIUS: 5,
} as const;

// Image Constants
export const IMAGE_CONSTANTS = {
  CAT_WIDTH: 250,
  CAT_HEIGHT: 250,
  CAT_BORDER_RADIUS: 6,
} as const;

// Hit Slop Constants
export const HIT_SLOP = {
  BUTTON: { top: 20, bottom: 20, left: 20, right: 20 },
  CLOSE: { top: 10, bottom: 10, left: 10, right: 10 },
} as const;
