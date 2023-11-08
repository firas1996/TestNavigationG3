import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../../css";

const Contact = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text>Contact Screen</Text>
      <Button title="Home" onPress={goToHome} />
      <Button title="About" onPress={goToAbout} />
      {/* <Test /> */}
    </View>
  );
};

export default Contact;
