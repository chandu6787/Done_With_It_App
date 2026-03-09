import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../../components/ListingsScreen";
import ListingDetailsScreen from "../../components/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
