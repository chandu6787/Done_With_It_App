// simplified HomeScreen - we only render the welcome UI here
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessagesScreen from "../../components/MessagesScreen.jsx";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from "../../components/Icon.jsx"
import ListItem from "../../components/ListItem.jsx";
export default function HomeScreen() {
  return (
    // SafeAreaView needs to fill the screen to apply insets
        <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 ,
      padding:10
    }}>
      {/* <ListItem title="My title" subtitle="My subtitle"
      ImageComponent={<Icon name="email"/>}/> */}
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

// styles were only used by the previous example content and are no longer needed
