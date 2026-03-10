import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";
import Screen from "./Screen";
import AppText from "./AppText";
import AppButton from "./AppButton";
import listingsApi from "../app/api/listings";
import ActivityIndicator from "./ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const {
    data: listing,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <View style={styles.errorContainer}>
          <AppText>Could not load listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </View>
      )}
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images?.[0]?.url || item.imageUrl}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
      <ActivityIndicator visible={loading} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  errorContainer: {
    marginBottom: 16,
  },
});
