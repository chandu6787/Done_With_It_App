import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text
} from "react-native";
import AppButton from "./AppButton";
import Screen from "./Screen";

function WelcomeScreen({navigation}) {
  return (
    <Screen style={styles.container}>
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
        <AppButton title="Login" onPress={()=>navigation.navigate("Login")}/>
        <AppButton title="Register" color="#4ecdc4" onPress={()=>navigation.navigate("Register")}/>

        </View>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  background: {
    flex: 1,
    width: "100%",
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
