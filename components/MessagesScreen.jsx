import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
// always use the same SafeAreaView that the provider comes from
import ListItemDeleteAction from './ListItemDeleteAction';
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from './ListItem.jsx'
import ListItemSeparator from './ListItemSeparator.jsx'
const messages=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require('../assets/images/raghava.jpg')
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require('../assets/images/raghava.jpg')
    },
]
export default function MessagesScreen() {
  return (
      <FlatList data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item})=><ListItem title={item.title} 
          subtitle={item.description}
          image={item.image}
          onPress={()=>console.log(" ")}
          renderRightActions={ListItemDeleteAction}
        />}
        ItemSeparatorComponent={ListItemSeparator}
      />
  )
}

const styles = StyleSheet.create({})