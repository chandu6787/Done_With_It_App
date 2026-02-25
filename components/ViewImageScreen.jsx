import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
const { width, height } = Dimensions.get("window");

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        style={styles.image}
        source={require("../assets/images/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  image: {
    width: width,
    height: height,
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
