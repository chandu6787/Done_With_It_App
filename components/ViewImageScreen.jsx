import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
      />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={40} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={40} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  image: {
    width: width,
    height: height,
    resizeMode: "contain",
    position: "absolute",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
