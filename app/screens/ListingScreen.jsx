import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screens from "../components/Screen";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condtion",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
export default function ListingScreen() {
  return (
    <Screens style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 8,
    backgroundColor: colors.light,
  },
});
