import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Icon({
  name,
  size = 40,
  iconColor = "#fff",
  backgroundColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}
