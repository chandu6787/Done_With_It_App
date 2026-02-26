// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import { View } from "react-native";
import ListingDetailsScreen from "../../components/ListingDetailsScreen.jsx";
export default function HomeScreen() {
  return (
    <View style={{
      flex:1,
      
      padding:5
    }}>
      <ListingDetailsScreen/>
    </View>
  );
}

// styles were only used by the previous example content and are no longer needed
