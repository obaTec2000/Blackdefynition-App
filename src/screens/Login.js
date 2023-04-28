import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { Input, NativeBaseProvider, Icon, Box, AspectRatio } from "native-base";
import COLORS from "../../consts/colors";

//fonts
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

const SignUp = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Blair ITC.otf": require("../../assets/Blair ITC.otf"),
  });

  if (!fontsLoaded) {
    return <Apploading />;
  }

  return (
    <ImageBackground
      source={require("../../assets/mobilescreen3.png")}
      style={styles.image}
    >
      {/* Title and text container */}
      <View style={{ paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>blackdefynition</Text>
        </View>
      </View>

      <KeyboardAvoidingView style={styles.inputGroup}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="USERNAME"
            onChangeText={(text) => {}}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.text2}>
        <Pressable onPress={() => navigation.navigate("Forgot")}>
          <Text
            style={{
              color: "grey",
              fontSize: 9,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              right: -90,
              top: 190,
            }}
          >
            forgot password ?{" "}
          </Text>
        </Pressable>
      </View>
      <View style={styles.text2}>
        <Text
          style={{
            color: "white",
            fontSize: 9,
            fontFamily: "Blair ITC.otf",
            textTransform: "uppercase",
            fontStyle: "normal",
            right: 85,
            top: 200,
          }}
        >
          remember me{" "}
        </Text>
      </View>

      <View style={styles.text2}>
        <Text
          style={{
            color: "grey",
            fontSize: 10,
            fontFamily: "Blair ITC.otf",
            textTransform: "uppercase",
            fontStyle: "normal",
            top: 300,
          }}
        >
          or{" "}
        </Text>
      </View>

      <View style={styles.text2}>
        <Text
          style={{
            color: "grey",
            fontSize: 10,
            fontFamily: "Blair ITC.otf",
            textTransform: "uppercase",
            fontStyle: "normal",
            top: 320,
          }}
        >
          sign up with{" "}
        </Text>
      </View>
      <View style={styles.text2}>
        <Text
          style={{
            color: "white",
            fontSize: 10,
            fontFamily: "Blair ITC.otf",
            textTransform: "uppercase",
            fontStyle: "normal",
            top: 386,
            left: -17,
          }}
        >
          don't have account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "grey",
              fontSize: 10,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              left: 133,
              top: 375,
            }}
          >
            sign up{" "}
          </Text>
        </Pressable>
      </View>

      {/* Button container */}
      <View
        styles={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 40,
        }}
      >
        {/* button */}
        {/* button */}
        <Pressable onPress={() => navigation.navigate("home")}>
          <View style={styles.btn}>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontFamily: "Blair ITC.otf",
                fontWeight: 500,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              sign up
            </Text>
          </View>
        </Pressable>
      </View>
      {/* <View style={styles.btn2}>
        <Text
          style={{
            color: "black",
            fontSize: 12,
            fontFamily: "Blair ITC.otf",
            fontWeight: 500,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        ></Text>
      </View> */}
      <Image
        source={require("../../assets/facebook.png")}
        style={styles.facebook}
      ></Image>
      <Image
        source={require("../../assets/twitter.png")}
        style={styles.twitter}
      ></Image>
      <Image
        source={require("../../assets/instagram.png")}
        style={styles.instagram}
      ></Image>
      <Image
        source={require("../../assets/goggle.png")}
        style={styles.goggle}
      ></Image>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },

  btn: {
    height: 30,
    width: 98,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    top: 200,
  },

  btn2: {
    height: 8,
    width: 8,
    bottom: 40,
    backgroundColor: "white",
    left: -140,
    top: 15,
  },

  title: {
    fontFamily: "Blair ITC.otf",
    fontStyle: "normal",
    textAlign: "center",
    width: 226,
    height: 28,
    fontSize: 19,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    top: 190,
  },

  remember: {
    fontFamily: "Blair ITC.otf",
    fontStyle: "normal",
    width: 87,
    height: 11,
    fontSize: 9,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    top: 300,
    left: -62,
  },

  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 190,
  },
  container: {
    // backgroundColor: "white",
    width: 324,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 36,
    width: 324,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "white",
    fontFamily: "Blair ITC.otf",
    fontSize: 9,
  },

  facebook: {
    width: 41.18,
    height: 41.18,
    left: -70,
    top: 283,
  },

  twitter: {
    width: 41.18,
    height: 41.18,
    left: -20,
    top: 242,
  },

  instagram: {
    width: 41.18,
    height: 41.18,
    left: 28,
    top: 202,
  },

  goggle: {
    width: 41.18,
    height: 41.18,
    left: 79,
    top: 160,
  },
});
export default SignUp;
