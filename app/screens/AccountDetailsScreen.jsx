import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screens from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];
export default function AccountDetailsScreen() {
  return (
    <Screens style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Parmeshwar Changulpaye"
          subtitle="changulpaye@gmail.com"
          image={require("../assets/param.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 30,
  },
});
