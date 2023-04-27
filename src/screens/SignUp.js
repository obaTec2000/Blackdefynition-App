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
        <View>
          <Text style={styles.create}>Create your Account!</Text>
        </View>
        <View style={styles.text2}>
          <Text
            numberOfLines={2}
            style={{
              color: "white",
              fontSize: 7,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              left: 30,
              top: 408,
            }}
          >
            {" "}
            By creating your account, you agree to our Terms of use &. Privacy
            Policy{" "}
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView style={styles.inputGroup}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="FIRST NAME"
            onChangeText={(text) => {}}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="LAST NAME"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="E-MAIL ADDRESS"
            onChangeText={(text) => {}}
            secureTextEntry
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
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="CONFIRM PASSWORD"
            onChangeText={(text) => {}}
            secureTextEntry
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="GENDER"
            onChangeText={(text) => {}}
            secureTextEntry
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
     {/* button */}
     <Pressable onPress={() => navigation.navigate("Login")}>
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
        <View style={styles.text2}>
          <View style={styles.text2}>
            <Text
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Blair ITC.otf",
                textTransform: "uppercase",
                fontStyle: "normal",
                right: 30,
                top: 140,
              }}
            >
              Already have an account?{" "}
            </Text>
          </View>
          <View style={styles.text2}>
            <Text
              style={{
                color: "grey",
                fontSize: 8,
                fontFamily: "Blair ITC.otf",
                textTransform: "uppercase",
                fontStyle: "normal",
                left: 125,
                top: 130,
              }}
            >
              {" "}
              sign up{" "}
            </Text>
            <Pressable
              onPress={() => navigation.navigate("Login")}
            ></Pressable>
          </View>
        </View>
      </View>
      <View style={styles.btn2}>
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
      </View>
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
    height: 38,
    width: 104,
    bottom: 40,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    left: 20,
    top: 130,
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
    width: 322,
    height: 40,
    fontSize: 19,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    top: 100,
  },

  create: {
    fontFamily: "Blair ITC.otf",
    fontStyle: "normal",
    textAlign: "center",
    width: 322,
    height: 40,
    fontSize: 9,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    top: 100,
    left: -85,
  },

  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  container: {
    // backgroundColor: "white",
    width: 324,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: 324,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 30,
    backgroundColor: "white",
    fontFamily: "Blair ITC.otf",
  },
});
export default SignUp;
