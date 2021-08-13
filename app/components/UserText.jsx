import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

export default function UserText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avinger",
  },
});
