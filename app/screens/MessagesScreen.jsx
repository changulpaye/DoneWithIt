import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screens from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Prasad",
    description: "D1",
    image: require("../assets/param.jpg"),
  },
  {
    id: 2,
    title: "Param",
    description: "D2",
    image: require("../assets/param.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          title: "Tanu",
          description: "D2",
          image: require("../assets/param.jpg"),
        },
      ]);
      setRefreshing(false);
    }, 3000);
  };
  return (
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({});
