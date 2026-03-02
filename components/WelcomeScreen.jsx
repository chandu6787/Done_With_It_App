import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text
} from "react-native";
import AppButton from "./AppButton";

const { width, height } = Dimensions.get("window");

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      resizeMode="cover"
      style={styles.background}
      // path should point to assets folder inside this project (one level up from components)
      source={require("../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/images/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don&apos;t Need</Text>

      </View>
      <View style={styles.buttonContainer}>
      <AppButton title="Login"/>
      <AppButton title="Register" color="#4ecdc4"/>

      </View>
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
  logo:{
    width:100,
    height:100,
  },
  logoContainer:{
    position:"absolute",
    top:70,
    alignItems:"center"

  },
  buttonContainer:{
    width:"100%",
    padding:20,
  },
  tagline:{
    fontSize:25,
    paddingVertical:20,
    fontWeight:"600"
  }

});

export default WelcomeScreen;
