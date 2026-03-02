import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
export default function AppPicker({ iconName, placeholder, items ,onSelectItem,selectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              style={styles.icon}
              size={40}
            />
          )}
          <AppText style={styles.text}>{selectedItem?selectedItem.label :placeholder}</AppText>
          <MaterialCommunityIcons name="chevron-down" size={40} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cdddec",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
