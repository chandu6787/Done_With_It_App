import {AsyncStorage} from "@react-native-async-storage/async-storage"
const prefix='cache';
import moment from "moment"
const store=async(key ,value)=>
{
    try {
        const item={
           value,
           timestamp:Date.now()
        }
        await   AsyncStorage.setItem(prefix+key,JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}
const get=async(key)=>
{
    try {
        const value=await AsyncStorage.getItem(prefix+key);
        const item=JSON.parse(value);
        if(!item)
            return null;
        const now=moment(Date.now());
        const storedTime=moment(item.timestamp);
        const isExpired=now.diff(storedTime,'minutes')>5;
        if(isExpired)
        {
           await AsyncStorage.removeItem(prefix+key);
            return null;
        }
        return item.value;

    } catch (error) {
        console.log(error);
    }

}
export default{
    store,
    get
}