import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WelecomeScreen() {
  const handleLogin = () => {
    console.log("Handle Login");
  };
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      blurRadius={3}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={handleLogin} />
        <AppButton title="Register" color="secondary" onPress={handleLogin} />
        {/* <View style={styles.registerButton}></View> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
