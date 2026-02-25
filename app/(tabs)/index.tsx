// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import ViewImageScreen from "../../components/ViewImageScreen";
import WelcomeScreen from "../../components/WelcomeScreen";
import AppButton from "@/components/AppButton.jsx";
import {View} from  "react-native"
export default function HomeScreen() {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      padding:10
    }}>
      <AppButton title="Login" onPress={()=>console.log("Tapped!")}></AppButton>
    </View>
  );
}

// styles were only used by the previous example content and are no longer needed
