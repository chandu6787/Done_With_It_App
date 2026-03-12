import AppNavigator from "../navigation/AppNavigator.js";
import OfflineNotice from "../../components/OfflineNotice.jsx";

export default function HomeScreen() {
  return (
    <>
      <OfflineNotice />
      <AppNavigator />
    </>
  );
}
