import React,{useState} from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem.jsx";
import ListItemDeleteAction from "./ListItemDeleteAction";
import ListItemSeparator from "./ListItemSeparator.jsx";

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/images/raghava.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/images/raghava.jpg")
    },
];
export default function MessagesScreen() {
const [messages,setMessages]=useState(initialMessages);
const handleDelete=(message)=>
{
  const newMessages=messages.filter(m=>m.id!==message.id);
  setMessages(newMessages);
}
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.description}
          image={item.image}
          onPress={() => console.log("Pressed", item.title)}
          renderRightActions={() => <ListItemDeleteAction onPress={()=>handleDelete(item)} />}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}
