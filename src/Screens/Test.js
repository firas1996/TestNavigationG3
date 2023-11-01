import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Test = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  console.log(params);
  const goToAbout = () => {
    navigate("About");
  };
  return (
    <View>
      <Text style={{ color: params.abc }}>qsdqsdqsdqsd</Text>
      <TouchableOpacity
        activeOpacity={0.2}
        style={styles2.press}
        onPress={goToAbout}
      >
        <Text style={styles2.pressText}>This Is About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;

const styles2 = StyleSheet.create({
  press: {
    backgroundColor: "#56089e",
    borderRadius: 8,
  },
  pressText: {
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 20,
  },
});
