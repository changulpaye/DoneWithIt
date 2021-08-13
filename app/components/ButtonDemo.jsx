import React from "react";
import { Button, Alert, StyleSheet } from "react-native";

const ButtonDemo = () => {
  return (
    <>
      <Button
        style={[styles.btn, styles.primary]}
        onPress={() =>
          Alert.alert("My Title", "My message", [
            {
              text: "Yes",
              onPress: () => console.log('yes')
            },
            { text: "No",
            onPress: () => console.log('No')
          },
          ])
        }
        title="Click me"
      ></Button>

    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    color: '#FF00FF',
    borderRadius: 3,
  },
  primary: {
    backgroundColor: 'dodgerblue',
  }
})

export default ButtonDemo;
