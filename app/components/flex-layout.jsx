import React from "react";
import { View, Text } from "react-native";

export default function FlexLayout() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center", // center container items onlye work when wrapping.
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // flexShrink: 1,
          // flex: 1,
          // flexBasis: 100, //map to width or height
          // alignSelf: "flex-start",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          // left: 20,
          // top: 20,
          // position: "absolute",
          // zIndex: 1,
        }}
      ></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
      {/* <View style={{ backgroundColor: "gray", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      ></View> */}
      {/* <ImageDemo /> */}
      {/* <ButtonDemo /> */}
      {/* <Layout></Layout> */}
    </View>
  );
}
