import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  IconComponent,
} from "react-native";
import colors from "../config/colors";
import UserText from "./UserText";

export default function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    // <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.detailsContainer}>
          <UserText style={styles.title}>{title}</UserText>
          {subtitle && <UserText style={styles.subtitle}>{subtitle}</UserText>}
        </View>
      </View>
    </TouchableHighlight>
    // /* </Swipeable> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    marginTop: 10,
    fontWeight: "700",
  },
  detailsContainer: {
    marginLeft: 4,
    alignItems: "center",
  },
});
