import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text
} from "react-native";

const { width, height } = Dimensions.get("window");

function WelcomeScreen(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      // path should point to assets folder inside this project (one level up from components)
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/images/logo-red.png")} />
      <Text>Sell What You Don't Need</Text>

      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center",

  },
  loginButton: {
    width: width,
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: width,
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo:{
    width:100,
    height:100,
    alignItems:"center"
  },
  logoContainer:{
    position:"absolute",
    top:70,

  }
});

export default WelcomeScreen;
