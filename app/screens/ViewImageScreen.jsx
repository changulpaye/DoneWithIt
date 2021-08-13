import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          color={colors.white}
        />
      </View>

      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
