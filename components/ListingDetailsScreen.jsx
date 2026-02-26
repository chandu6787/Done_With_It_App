import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import ListItem from "./ListItem.jsx";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.listitemContainer}>
        <ListItem
          image={require("../assets/images/raghava.jpg")}
          title="Raghava Garapati"
          subtitle="5 Listings"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  listitemContainer:{
    marginVertical:30
  }
});
