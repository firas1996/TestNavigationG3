import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/Navigation/Drawer";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
