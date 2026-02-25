import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AppButton({title,onPress,color="#fc5c65"}) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:color}]}onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#fc5c65",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:"100%",
        marginVertical:10

    },
    text:{
        color:"#fff",
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})