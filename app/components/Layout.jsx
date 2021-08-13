import { useDeviceOrientation } from "@react-native-community/hooks";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Layout() {
  const { landscape } = useDeviceOrientation();
  console.log(landscape);
  return (
    <SafeAreaView style={styles.layoutContainer}>
      <View
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      >
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: "white",
    height: "100%",
  },
});

// Notes
