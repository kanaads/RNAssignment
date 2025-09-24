import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

/**
 * AppText component with consistent styling
 * Follows single responsibility principle
 */
const AppText: React.FC<TextProps> = (props) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lacquer-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 28, 
    letterSpacing: 0,
    textAlign: 'center',
  },
});

export default AppText;