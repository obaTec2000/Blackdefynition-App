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

//fonts
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

const Forgot = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Blair ITC.otf": require("../../assets/Blair ITC.otf"),
  });

  if (!fontsLoaded) {
    return <Apploading />;
  }

  return (
    <ImageBackground
      source={require("../../assets/mobilescreen4.png")}
      style={styles.image}
    >
      {/* Title and text container */}
      <View style={{ paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>forgot password</Text>
        </View>
        
        <View style={styles.text2}>
          <Text
            numberOfLines={2}
            style={{
              color: "white",
              fontSize: 9,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
             textAlign: "center",
              top: 207,
            }}
          >
           we will send a OTP to your e-mail.
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView style={styles.inputGroup}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder=" ENTER YOUR E-MAIL FOR VERIFICATION PROCESS!"
            onChangeText={(text) => {}}
          />
        </View>
      </KeyboardAvoidingView>

      {/* Button container */}
      <View
        styles={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 40,
        }}
      >
        {/* button */}
        <Pressable onPress={() => navigation.navigate("ConfirmOtp")}>
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
              enter 
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.btn2}>
          </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    height: 38,
    width: 104,
    bottom: 40,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    // alignItems: 'center',
    left: 10,
    top: 250,
  },

  btn2: {
    height: 6,
    width: 185,
    bottom: 40,
    backgroundColor: "rgba(255, 255, 255, 0.4);",
    borderRadius: 12,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Blair ITC.otf",
    fontStyle: "normal",
    textAlign: "center",
    letterSpacing: 2,
    fontSize: 19,
    width: 322,
    height: 40,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    top: 145,
  },
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 140,
  },
  container: {
    // backgroundColor: "white",
    width: 324,
    padding: 5,
    alignItems: 'center'
  },
  input: {
    padding: 15,
    height: 36,
    width: 324,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 30,
    backgroundColor: "white",
    fontFamily: "Blair ITC.otf",
    fontSize: 10,
  },

});
export default Forgot;
