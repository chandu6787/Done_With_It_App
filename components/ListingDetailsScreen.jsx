import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import ListItem from "./ListItem.jsx";
import Screen from "./Screen";

export default function ListingDetailsScreen({route}) {
  const listing = route?.params ?? {};
  const imageUri = listing?.images?.[0]?.url || listing?.imageUrl;

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={
          imageUri
            ? { uri: imageUri }
            : listing.image || require("../assets/images/jacket.jpg")
        }
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title || "Listing"}</AppText>
        <AppText style={styles.price}>${listing.price ?? 0}</AppText>
        <View style={styles.listitemContainer}>
        <ListItem
          image={require("../assets/images/raghava.jpg")}
          title="Raghava Garapati"
          subtitle="5 Listings"
        />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
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
