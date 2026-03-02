// simplified HomeScreen - we only render the welcome UI here
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessagesScreen from "../../components/MessagesScreen.jsx";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from "../../components/Icon.jsx"
import ListItem from "../../components/ListItem.jsx";
import AccountScreen from "../../components/AccountScreen.jsx";
import ListingsScreen from "../../components/ListingsScreen.jsx";
import AppTextInput from "../../components/AppTextInput.jsx";
import AppPicker from "../../components/AppPicker.jsx";
const Categories=[
  {label:"Furniture",value:1},
  {label:"Clothing",value:2},
  {label:"Cameras",value:3},
]
export default function HomeScreen() {
  const [category,setCategory]=useState();
  return (
    // SafeAreaView needs to fill the screen to apply insets
        <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 ,
      padding:10
    }}>
      {/* <ListItem title="My title" subtitle="My subtitle"
      ImageComponent={<Icon name="email"/>}/> */}
      {/* <AppTextInput iconName="email" placeholder="Type something" /> */}
      <AppPicker 
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      items={Categories} iconName="apps" placeholder="Category"/>
      <AppTextInput iconName="email" placeholder="Email"/>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

// styles were only used by the previous example content and are no longer needed
