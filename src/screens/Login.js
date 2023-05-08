import { React, useState } from "react";
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
  TouchableOpacity,
} from "react-native";

// import { CheckBox } from "native-base";

import Entypo from "react-native-vector-icons/Entypo";

//fonts
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

const Login = ({ navigation }) => {
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  };

  const option = ["remember"];
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
      <TouchableOpacity onPress={() => navigation.goBack("Home")}>
        <Entypo
          name="chevron-left"
          style={{
            fontSize: 18,
            color: "black",
            padding: 7,
            backgroundColor: "white",
            borderRadius: 10,
            right: 140,
            top: -155,
          }}
        />
      </TouchableOpacity>
      {/* Title and text container */}
      <View style={{ paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>blackdefynition</Text>
        </View>
      </View>

      <View>
        <Text style={styles.checkfont}></Text>
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
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <View style={styles.text2}>
          <Text
            style={{
              color: "grey",
              fontSize: 9,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              right: -90,
              top: 175,
            }}
          >
            forgot password ?{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.text2}>
        <TouchableOpacity onPress={() => handleCheckBox()}>
          <View
            style={{
              backgroundColor: checkBox === true ? "white" : "transparent",
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 4,
              top: 193,
              right: 110,
              
            }}
          ></View>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 9,
            fontFamily: "Blair ITC.otf",
            textTransform: "uppercase",
            fontStyle: "normal",
            right: 85,
            top: 180,
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
            top: 260,
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
            top: 270,
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
            top: 336,
            left: -25,
          }}
        >
          don't have account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "grey",
              fontSize: 10,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              left: 125,
              top: 325,
            }}
          >
            sign up{" "}
          </Text>
        </TouchableOpacity>
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

        <TouchableOpacity onPress={() => navigation.navigate("home")}>
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
              Log in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        
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
        source={require("../../assets/linkedin.png")}
        style={styles.twitter}
      ></Image>
      <Image
        source={require("../../assets/goggle.png")}
        style={styles.goggle}
      ></Image>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: 15,
    height: 15,
    top: 113,
    right: 140,
    borderWidth: 2,
    backgroundColor: "white",
    marginRight: 5,
  },
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
    top: 180,
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
    top: 170,
  },
  container: {
    // backgroundColor: "white",
    width: 324,
    padding: 2,
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
    left: -65,
    top: 223,
  },

  twitter: {
    width: 41.18,
    height: 41.18,
    left: -10,
    top: 182,
  },

  goggle: {
    width: 41.18,
    height: 41.18,
    left: 50,
    top: 140,
  },
});
export default Login;
