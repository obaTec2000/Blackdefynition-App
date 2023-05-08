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
import OTPInputView from "@twotalltotems/react-native-otp-input";

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
          <Text style={styles.title}>enter otp code</Text>
        </View>
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
        <Pressable onPress={() => navigation.navigate("Reset")}>
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
              verify
            </Text>
          </View>
        </Pressable>

        <OTPInputView
          style={{ width: "80%", height: 200 }}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>
      <View style={styles.btn2}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
    color: "black",
  },

  underlineStyleBase: {
    width: 40,
    height: 30,
    borderWidth: 0,
    borderBottomWidth: 35,
    top: 85,
    left: 7,
    // alignItems: 'center',
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
    color: "black",
    fontSize: 12,
  },
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
    alignItems: "center",
    left: 100,
    top: 320,
  },

  btn2: {
    height: 6,
    width: 185,
    bottom: 110,
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
    top: 185,
  },
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 170,
  },
  container: {
    // backgroundColor: "white",
    width: 324,
    padding: 5,
    alignItems: "center",
  },
  input: {
    padding: 15,
    height: 44,
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
