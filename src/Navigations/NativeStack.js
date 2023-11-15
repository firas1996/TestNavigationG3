import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import NotScreen from "../Screens/NotScreen";
import Users from "../Screens/Users";
const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Users"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
};

export default NativeStack;
