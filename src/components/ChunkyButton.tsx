import React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import AppText from './AppText';
import styles from '../screens/MainScreen.styles';
import { BUTTON_DIMENSIONS, HIT_SLOP } from '../constants';
import { ButtonConfig } from '../types/ButtonTypes';

/**
 * Props interface for ChunkyButton component
 */
interface ChunkyButtonProps extends ButtonConfig {
  readonly label: string;
  readonly onPress?: () => void;
  readonly width?: number;
  readonly height?: number;
}

/**
 * ChunkyButton component with clean architecture
 * Follows single responsibility principle
 */
const ChunkyButton: React.FC<ChunkyButtonProps> = ({
  label,
  color,
  shadowColor,
  onPress,
  width = BUTTON_DIMENSIONS.DEFAULT_WIDTH,
  height = BUTTON_DIMENSIONS.DEFAULT_HEIGHT,
  testID,
}) => {
  const shadowOffset = BUTTON_DIMENSIONS.SHADOW_OFFSET;
  const totalWidth = width + shadowOffset;
  const totalHeight = height + shadowOffset;

  const containerStyle: ViewStyle = {
    width: totalWidth,
    height: totalHeight,
  };

  const shadowStyle: ViewStyle = {
    width,
    height,
    backgroundColor: shadowColor,
    transform: [
      { translateX: shadowOffset },
      { translateY: shadowOffset },
    ],
  };

  const buttonFaceStyle: ViewStyle = {
    width,
    height,
    backgroundColor: color,
  };

  const accessibilityLabel = label.replace(/\n/g, ' ');

  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      hitSlop={HIT_SLOP.BUTTON}
      style={[styles.pressableWrap, containerStyle]}
    >
      {/* Shadow layer (decorative) */}
      <View
        pointerEvents="none"
        style={[styles.shadowBlock, shadowStyle]}
      />
      {/* Button face */}
      <View style={[styles.buttonFace, buttonFaceStyle]}>
        <AppText style={styles.buttonLabel}>{label}</AppText>
      </View>
    </Pressable>
  );
};

export default ChunkyButton;
