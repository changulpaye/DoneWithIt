import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import UserText from "./UserText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <UserText style={styles.title}> {title} </UserText>
        <UserText style={styles.subtitle}> {subtitle} </UserText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
