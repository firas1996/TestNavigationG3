import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../../css";

const Home = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate("About");
  };
  const goToContact = () => {
    navigation.navigate("Contact");
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
