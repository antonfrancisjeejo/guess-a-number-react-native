import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOver = ({ rounds, userNumber, onRestart }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Over!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          }}
        >
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri:
            //     "https://avatars0.githubusercontent.com/u/44845055?s=400&u=da15adf6e19454410ef246b6dc9ca776492c3180&v=4",
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            ...styles.resultContainer,
            ...{
              marginVertical: availableDeviceHeight / 60,
            },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: availableDeviceHeight > 400 ? 16 : 20,
              },
            }}
          >
            Your phone needed <Text style={styles.highlight}>{rounds} </Text>
            rounds to guess the number
            <Text style={styles.highlight}> {userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOver;
