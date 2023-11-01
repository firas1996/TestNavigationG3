import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from "../../css";
import Test from "./Test";

const Home = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToContact = () => {
    navigation.navigate("Contact", { abc: "red" });
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="About" onPress={goToAbout} />
      <Button title="Contact" onPress={goToContact} />
    </View>
  );
};

export default Home;
