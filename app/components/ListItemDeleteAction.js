import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Entypo name="trash" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
