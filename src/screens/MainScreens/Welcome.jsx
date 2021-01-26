import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Spinner } from "native-base";

const image = { uri: "https://res.cloudinary.com/dj8a0phpt/image/upload/v1611671942/ReactNative%20-%20Mychat/ykozordkyofajn4ik7n6.gif" };

const Welcome = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <View style={ styles.details__container } >
        <Text style={styles.text__one}>Welcome </Text>
        <Text style={styles.text__two}> to  </Text>
        <Text style={styles.text__three}>My chat</Text>
        <Text style={styles.text__four}>Pleace wait for a moment ....!  </Text>
        <Spinner style={styles.spinner} color='white' />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column"
  },
  details__container:{
    flexDirection:"column",
    height:"100%",
    backgroundColor: "#000000a0",
    alignItems:"center",
    justifyContent:"center"
  },    
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text__one: {
    color: "#e1f5fe",
    fontSize: 42,
    fontFamily:"nunito-bold",
    textShadowColor:"blue",
    textShadowRadius:40
  },
  text__two: {
    color: "#e1f5fe",
    fontSize: 32,
    fontFamily:"nunito-bold",
    textShadowColor:"blue",
    textShadowRadius:40
  },
  text__three: {
    color: "#e1f5fe",
    fontSize: 52,
    fontFamily:"nunito-bold",
    textShadowColor:"blue",
    textShadowRadius:40
  },
  text__four:{
    color: "#e1f5fe",
    fontSize: 25,
    fontFamily:"nunito-bold",
    marginTop:"25%",
    
  },
  spinner:{

  }
});

export default Welcome;