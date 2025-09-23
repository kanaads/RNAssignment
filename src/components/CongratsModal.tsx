import React from "react";
import { Modal, Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import AppText from "./AppText";
import styles from "../screens/MainScreen.styles";

export default function PopupModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      presentationStyle="overFullScreen"
    >
      <Pressable
        style={styles.modalBackdrop}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close popup"
        accessibilityHint="Closes the popup message"
        testID="modalBackdrop"
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={styles.modalCard}
          accessibilityViewIsModal
          accessible
        >
          <View style={styles.closeContainer}>
            <Pressable
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              accessibilityLabel="Close"
              accessibilityRole="button"
              style={styles.closeChip}
              testID="closeChip"
            >
              <AppText style={styles.closeText}>✕</AppText>
            </Pressable>
          </View>

          <AppText style={styles.modalTitle}>CONGRATULATIONS!</AppText>

          <FastImage
            source={require("../assets/cat.gif")}
            style={styles.catImage}
            resizeMode={FastImage.resizeMode.cover}
          />

          <AppText style={styles.modalBody}>
            HERE IS THE POPUP {"\n"} MESSAGE!
          </AppText>
        </Pressable>
      </Pressable>
    </Modal>
  );
}