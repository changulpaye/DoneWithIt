import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight } from "react-native";
const ImageDemo = () => {
  return (
    <>
      <Text style={styles.header}>
        React Native
      </Text>
      {/* <Image style={styles.logo} source={require('./assets/favicon.png')} /> */}
      <TouchableHighlight onPress={() => console.log("onPress")}>
        <Image
          blurRadius={3}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    fontStyle: "italic",
    color: "black",
  },
  buttonRound: {
    borderRadius: 10,
    backgroundColor: "red",
    color: "red",
  },
  logo: {
    width: 200,
    height: 300,
  },
});

export default ImageDemo;
