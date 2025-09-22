import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

export default function AppText(props: TextProps) {
  return <Text {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lacquer-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 28, // 100% of font size
    letterSpacing: 0,
    textAlign: 'center',
  },
});