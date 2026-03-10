import { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState();

  useEffect(() => {
    // Browsers often block geolocation on http; skip to avoid breaking web.
    if (Platform.OS === "web") return;

    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;

        const lastKnownPosition = await Location.getLastKnownPositionAsync();
        if (lastKnownPosition?.coords) {
          const { latitude, longitude } = lastKnownPosition.coords;
          setLocation({ latitude, longitude });
          return;
        }

        const currentPosition = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = currentPosition.coords;
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log("Error requesting location", error);
      }
    };

    getLocation();
  }, []);

  return location;
}
