import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerC = () => {
  const { navigate } = useNavigation();
  const goToAbout = () => {
    navigate("About");
  };
  const goToHome = () => {
    navigate("Home");
  };
  return (
    <View style={{ paddingTop: 100 }}>
      <DrawerItem
        label="Home"
        onPress={goToHome}
        style={{ backgroundColor: "#ccc" }}
        labelStyle={{}}
      />
      <DrawerItem label="About" onPress={goToAbout} />
    </View>
  );
};

export default DrawerC;
