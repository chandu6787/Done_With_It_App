import ListingEditScreen from "@/components/ListingEditScreen.jsx";
import ImageInputList from "../../components/ImageInputList.jsx";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Button, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <ListingEditScreen/>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
