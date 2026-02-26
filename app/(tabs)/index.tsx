// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import { View } from "react-native";
import ListingDetailsScreen from "../../components/ListingDetailsScreen.jsx";
import ViewImageScreen from "../../components/ViewImageScreen.jsx";
export default function HomeScreen() {
  return (
    <View style={{
      flex:1,
      
      padding:5
    }}>
      <ViewImageScreen/>
    </View>
  );
}

// styles were only used by the previous example content and are no longer needed
