import { View, Text } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrawerC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 100 }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default DrawerC;
