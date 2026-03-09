import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ListItem from "./ListItem";
import Icon from "./Icon";
import ListItemSeparator from "./ListItemSeparator";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "green",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "red",
    },
    targetScreen:"Messages"
  },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.section}>
        <ListItem
          title="Raghava Garapati"
          subtitle="raghavagarapati789@gmail.com"
          image={require("../assets/images/raghava.jpg")}
        />
      </View>
      <View style={styles.section}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={()=>navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  section: {
    marginVertical: 10,
  },
});
