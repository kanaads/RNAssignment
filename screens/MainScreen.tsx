import React from "react";
import {
  SafeAreaView,
  View,
  Pressable,
  Modal,
  Image,
  Text,
  AccessibilityInfo,
} from "react-native";
import AppText from "../components/AppText";
import ChunkyButton from "../components/ChunkyButton";
import styles from "./MainScreen.styles";

export default function MainScreen() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const plural = (n: number) => (n === 1 ? "time" : "times");

  const inc1 = React.useCallback(() => setCount1((c) => c + 1), []);
  const inc2 = React.useCallback(() => setCount2((c) => c + 1), []);
  const reset1 = React.useCallback(() => setCount1(0), []);
  const reset2 = React.useCallback(() => setCount2(0), []);

  const openModal = React.useCallback(() => {
    setOpen(true);
    // announce for screen readers
    AccessibilityInfo.announceForAccessibility?.("Popup opened: Congratulations!");
  }, []);
  const closeModal = React.useCallback(() => setOpen(false), []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ padding: 20, gap: 24 }}>
        <Text
          style={styles.title}
          accessibilityRole="header"
          accessibilityLabel="Coding Interview: React Native Test"
        >
          Coding{"\n"}Interview: React{"\n"}Native Test
        </Text>

        <ChunkyButton
          label={`You've clicked this\nbutton ${count1} ${plural(count1)}`}
          color="#FF7C27"
          shadowColor="#632700"
          onPress={inc1}
          testID="orangeBtn"
        />
    

        {/* spacer (replace empty Views) */}
        <View style={{ height: 8 }} />

        <ChunkyButton
          label={`You've clicked this\nbutton ${count2} ${plural(count2)}`}
          color="#4EED59"
          shadowColor="#116617"
          onPress={inc2}
          testID="greenBtn"
        />

    
        <ChunkyButton
          label={"Click this button\nfor a popup message"}
          color="#C3BADA"
          shadowColor="#390040"
          onPress={openModal}
          testID="popupBtn"
        />
      </View>

      {/* Popup modal */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
        presentationStyle="overFullScreen"
      >
        {/* Backdrop press closes modal */}
        <Pressable
          style={styles.modalBackdrop}
          onPress={closeModal}
          accessibilityRole="button"
          accessibilityLabel="Close popup"
          accessibilityHint="Closes the popup message"
          testID="modalBackdrop"
        >
          {/* Stop taps inside the card from closing */}
          <Pressable
            onPress={(e) => e.stopPropagation()}
            style={styles.modalCard}
            accessibilityViewIsModal
            accessible
          >
            <View style={{ alignItems: "flex-end" }}>
              <Pressable
                onPress={closeModal}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                accessibilityLabel="Close"
                accessibilityRole="button"
                style={styles.closeChip}
                testID="closeChip"
              >
                <AppText style={{ fontWeight: "700" }}>✕</AppText>
              </Pressable>
            </View>

            <AppText style={styles.modalTitle}>CONGRATULATIONS!</AppText>

            <Image
              source={require("../assets/cat.gif")}
              accessibilityIgnoresInvertColors
              accessibilityLabel="Celebration cat animation"
              style={{
                width: 220,
                height: 160,
                borderRadius: 6,
                alignSelf: "center",
                marginVertical: 12,
              }}
              resizeMode="cover"
            />

            <AppText style={styles.modalBody}>
              HERE IS THE POPUP MESSAGE!
            </AppText>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
