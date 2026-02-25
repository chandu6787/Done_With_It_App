// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import ViewImageScreen from "../../components/ViewImageScreen";
import WelcomeScreen from "../../components/WelcomeScreen";
import AppButton from "@/components/AppButton.jsx";
import {View} from  "react-native"
import Card from "../../components/Card";
export default function HomeScreen() {
  return (
    <View style={{
      flex:1,
      
      padding:25
    }}>
      <Card title="Red jacket for sale" subTitle="$100" image={require("../../assets/images/jacket.jpg")}></Card>
    </View>
  );
}

// styles were only used by the previous example content and are no longer needed
