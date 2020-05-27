import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default BodyText;
