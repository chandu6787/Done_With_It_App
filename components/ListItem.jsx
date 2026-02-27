import { StyleSheet, Text, View ,Image,TouchableHighlight} from 'react-native'
import React from 'react'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
export default function ListItem({title,subtitle,image,onPress,renderRightActions}) {
  return (
    <Swipeable
    renderRightActions={renderRightActions}>
    <TouchableHighlight
    onPress={onPress}
    underlayColor={"#ede7e7"}
    >
    <View style={styles.container}>
        <Image  style={styles.image} source={image} />
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
    </View>
    </TouchableHighlight>

    </Swipeable>
  )
}

const styles = StyleSheet.create({
   container:{
    flexDirection:"row"
   },
image:{
    width:70,
    height:70,
    borderRadius:35,
    marginRight:20
},
title:{
    fontWeight:"bold"
},
subtitle:{
    color:"#6e6969"
}
})