import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ListItem from "../components/ListItem";
import UserText from "../components/UserText";
import colors from "../config/colors";

export default function ListingDetails(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <UserText style={styles.title}> Red Jacket For Sale </UserText>
        <UserText style={styles.price}> 100$ </UserText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/param.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
