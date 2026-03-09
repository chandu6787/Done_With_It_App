import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../components/LoginScreen.jsx";
import RegisterScreen from "../../components/RegisterScreen.jsx";
import WelcomeScreen from "../../components/WelcomeScreen.jsx";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
