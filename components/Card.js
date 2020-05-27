import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    //shadow works only on IOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    //Elevation uses default Material UI and works only on android
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
