import { StyleSheet, Text, View , TouchableWithoutFeedback, Image} from 'react-native'
import React from 'react'
import AppText from './AppText'
export default function Card({title,subTitle,imageUrl,onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.card}>
        {/* Use the native Image component to avoid any placeholder tinting from the cache library. */}
        <Image
          style={styles.image}
          source={
            imageUrl
              ? {uri:imageUrl}
              : require('../assets/images/jacket.jpg')
          }
        />
        <View style={styles.detailContainer}>
        <AppText style={styles.title}> {title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:"#fff",
        marginBottom:20,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height:200,
    },
    detailContainer:
    {
        padding:20
    },
    title:
    {
        marginBottom:7
    },
    subTitle:{
        color:"#4ecdc4",
        fontWeight:'bold'
    }
})
