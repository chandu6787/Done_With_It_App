import { create } from "apisauce";
import Constants from "expo-constants";
import { Platform } from "react-native";
import cache from "../utility/cache"
const configuredBaseUrl = process.env.EXPO_PUBLIC_API_URL;
const hostUri =
  Constants.expoConfig?.hostUri ||
  Constants.expoGoConfig?.debuggerHost ||
  Constants.manifest2?.extra?.expoClient?.hostUri ||
  Constants.manifest?.debuggerHost;
const host = hostUri?.split(":")?.[0];

const localBaseUrl = configuredBaseUrl
  ? configuredBaseUrl
  : host
    ? `http://${host}:3000/api`
    : Platform.OS === "android"
      ? "http://10.0.2.2:3000/api"
      : "http://localhost:3000/api";

const apiClient = create({
  baseURL: localBaseUrl,
});
const get=apiClient.get;
apiClient.get=async(url,params,axiosConfig)=>
{
   const response=await get(url,params,axiosConfig);
   if(response.ok)
   {
      cache.store(url,response.data);
      return response;
   }
   const data=await cache.get(url);
   return data ? {ok:true,data}:response;
}

export default apiClient;
