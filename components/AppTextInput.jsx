import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
export default function AppTextInput({iconName,placeholder}) {
  return (
    <View style={styles.container}>
       {iconName && <MaterialCommunityIcons name={iconName} style={styles.icon} size={40}/>}
        <TextInput style={styles.textInput} placeholder={placeholder}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#cdddec",
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:10,
        marginVertical:10
    },
    textInput:{
        fontSize:18,
        fontFamily:Platform.OS==="android"?"Roboto" : "Avenir"
    },
    icon:{
        marginRight:10
    }
})