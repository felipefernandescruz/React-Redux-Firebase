import React from "react";
import { View, Text, Button } from "native-base";
import { ImageBackground, Image } from "react-native";
import styles from "./WelcomeStyle";
import { onLoginPage } from "./WelcomeActions";

const WelcomePage = props => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../assets/img/parking-background.png")}
    >
      <View style={styles.mainContent}>
        <View style={styles.firstView}>
          <Text style={styles.textWelcome}>Seja Bem-Vindo</Text>
          <Image source={require("../../assets/icons/appParking.png")} />
        </View>

        <View style={styles.secondView}>
          <Button block title="FAZER LOGIN" onPress={() => onLoginPage()}>
            <Text>FAZER LOGIN</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomePage;
