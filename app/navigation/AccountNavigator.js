import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../components/AccountScreen";
import MessagesScreen from "../../components/MessagesScreen";
const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
