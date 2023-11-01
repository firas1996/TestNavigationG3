import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from "../../css";
import Test from "./Test";

const Contact = ({ navigation, route }) => {
  let abc = "";
  if (!route.params) {
    abc = "blue";
    console.log("123");
  } else {
    abc = route.params.abc;
    console.log("321");
  }
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: abc }}>Contact Screen</Text>
      <Button title="Home" onPress={goToHome} />
      <Button title="About" onPress={goToAbout} />
      {/* <Test /> */}
    </View>
  );
};

export default Contact;
