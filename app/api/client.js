import { create } from "apisauce";
import Constants from "expo-constants";
import { Platform } from "react-native";

const hostUri =
  Constants.expoConfig?.hostUri ||
  Constants.expoGoConfig?.debuggerHost ||
  Constants.manifest2?.extra?.expoClient?.hostUri ||
  Constants.manifest?.debuggerHost;
const host = hostUri?.split(":")?.[0];
const localBaseUrl = host
  ? `http://${host}:3000/api`
  : Platform.OS === "android"
    ? "http://10.0.2.2:3000/api"
    : "http://localhost:3000/api";

const apiClient = create({
  baseURL: localBaseUrl,
});

export default apiClient;
