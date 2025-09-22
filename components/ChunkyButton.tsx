import React from "react";
import { View, Pressable } from "react-native";
import AppText from "./AppText";
import styles from "../screens/MainScreen.styles";

interface ChunkyButtonProps {
  label: string;
  color: string;
  shadowColor: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  testID?: string;
}

export default function ChunkyButton({
  label,
  color,
  shadowColor,
  onPress,
  width = 205,
  height = 75,
  testID,
}: ChunkyButtonProps) {
  return (
    <View
      style={[
        styles.buttonWrap,
        { width, height },
      ]}
    >
      <View
        pointerEvents="none"
        style={[
          styles.shadowBlock,
          styles.shadowOffset,
          { width, height, backgroundColor: shadowColor },
        ]}
      />
      <Pressable
        onPress={onPress}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        style={[styles.button, { backgroundColor: color }]}
        accessibilityRole="button"
        accessibilityLabel={label.replace(/\n/g, " ")}
        testID={testID}
      >
        <AppText style={styles.buttonAppText}>{label}</AppText>
      </Pressable>
    </View>
  );
}
