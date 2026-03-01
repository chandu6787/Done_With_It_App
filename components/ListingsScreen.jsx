import { StyleSheet,FlatList, View } from 'react-native'
import React from 'react'
import Card from './Card'
const listings=[
    {
        id:1,
        title:'Red jacket for sale',
        price:100,
        image:require('../assets/images/jacket.jpg')
    },
    {
        id:2,
        title:'Couch in great condition',
        price:1000,
        image:require('../assets/images/couch.jpg')
    },

]
export default function ListingsScreen() {
  return (
    <View>
        <FlatList 
        data={listings}
        keyExtractor={listing=>listing.id.toString()}
        renderItem={({item})=><Card title={item.title}
        subTitle={"$"+item.price}
        image={item.image}
        />}
        />
    </View>
  )
}

const styles = StyleSheet.create({})