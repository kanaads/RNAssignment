import { Pressable, View } from "react-native";
import AppText from "./AppText";
import styles from "../screens/MainScreen.styles";

export default function ChunkyButton({
  label,
  color,
  shadowColor,
  onPress,
  width = 205,
  height = 75,
  testID,
}: {
  label: string;
  color: string;
  shadowColor: string;
  onPress?: () => void;
  width?: number;
  height?: number;
  testID?: string;
}) {
  const SHADOW_OFFSET = 8;
  const totalW = width + SHADOW_OFFSET;
  const totalH = height + SHADOW_OFFSET;

  return (
    <Pressable
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={label.replace(/\n/g, " ")}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      style={[styles.pressableWrap, { width: totalW, height: totalH }]}
    >
      {/* shadow (decorative) */}
      <View
        pointerEvents="none"
        style={[
          styles.shadowBlock,
          {
            width,
            height,
            backgroundColor: shadowColor,
            transform: [{ translateX: SHADOW_OFFSET }, { translateY: SHADOW_OFFSET }],
          },
        ]}
      />
      {/* button face */}
      <View
        style={[
          styles.buttonFace,
          {
            width,
            height,
            backgroundColor: color,
          },
        ]}
      >
        <AppText style={styles.buttonLabel}>{label}</AppText>
      </View>
    </Pressable>
  );
}
