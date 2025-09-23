import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  AccessibilityInfo,
} from "react-native";
import AppText from "../components/AppText";
import ChunkyButton from "../components/ChunkyButton";
import CongratsModal from "../components/CongratsModal";
import styles from "./MainScreen.styles";

export default function MainScreen() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [open, setOpen] = useState(false);

  const plural = (n: number) => (n === 1 ? "time" : "times");

  const inc1 = useCallback(() => setCount1((c) => c + 1), []);
  const inc2 = useCallback(() => setCount2((c) => c + 1), []);

  const openModal = useCallback(() => {
    setOpen(true);
    AccessibilityInfo.announceForAccessibility?.("Popup opened: Congratulations!");
  }, []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <SafeAreaView style={styles.screen}>

      <Text
          style={styles.title}
          accessibilityRole="header"
          accessibilityLabel="Coding Interview: React Native Test"
        >
          Coding{"\n"}Interview: React{"\n"}Native Test
        </Text>
        <View style={styles.spacer } />
      <View style={styles.container}>
        
        

        <ChunkyButton
          label={`You've clicked this\nbutton ${count1} ${plural(count1)}`}
          color="#FF7C27"
          shadowColor="#632700"
          onPress={inc1}
          testID="orangeBtn"
        />



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

      <CongratsModal visible={open} onClose={closeModal} />
    </SafeAreaView>
  );
}