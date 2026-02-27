// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessagesScreen from "../../components/MessagesScreen.jsx";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function HomeScreen() {
  return (
    // SafeAreaView needs to fill the screen to apply insets
        <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 ,
      padding:10
    }}>
      <MessagesScreen />
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

// styles were only used by the previous example content and are no longer needed
