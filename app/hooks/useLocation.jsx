import React,{useState,useEffect} from 'react'
import * as Location from 'expo-location'

export default function useLocation() {
    const [location, setLocation] = useState();
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
            console.log("Error is ",error);
        }
      };
      useEffect(() => {
        getLocation();
      }, []);
  return location;
}