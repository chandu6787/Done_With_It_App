import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../app/config/colors"
export default function ListItem({ title, subtitle, image, onPress, renderRightActions,IconComponent }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor="#ede7e7">
        <View style={styles.container}>
          {IconComponent}
       {image && <Image  style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subtitle &&<AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
        </View>
        <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
  },
  detailsContainer:{
   marginLeft:10,
   justifyContent:"center",
   flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.medium,
  },
});
