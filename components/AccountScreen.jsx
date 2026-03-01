import { StyleSheet,View ,FlatList} from 'react-native'
import React from 'react'
import ListItem from './ListItem'
import Icon from './Icon'
import ListItemSeparator from "./ListItemSeparator";
const menuItems=[
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:"green"
        }
    },
     {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:"red"
        }
    }
]
export default function AccountScreen() {
  return (
    <>
    <View style={styles.container}>

        <ListItem title="Raghava Garapati" subtitle="raghavagarapati789@gmail.com"
              image={require('../assets/images/raghava.jpg')}/>
    </View>
    <View style={styles.container}>
     <FlatList
     data={menuItems}
     keyExtractor={item=>item.title}
     renderItem={({item})=>
    <ListItem title={item.title}
    IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}/>}
    ItemSeparatorComponent={ListItemSeparator}
     />
    </View>
    <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor='#ffe66d'/>} />
    </>
  )
}

const styles = StyleSheet.create({
   container:{
    marginVertical:10
   }
})