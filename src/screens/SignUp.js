import React, { useState } from "react";
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
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

//fonts
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

const SignUp = ({ navigation }) => {
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox(!checkBox);
  };
  
  const [mood, setMood] = useState("");
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
      <TouchableOpacity onPress={() => navigation.goBack("Login")}>
        <Entypo
          name="chevron-left"
          style={{
            fontSize: 18,
            color: "black",
            padding: 7,
            backgroundColor: "white",
            borderRadius: 10,
            right: 140,
            top: -70,
          }}
        />
      </TouchableOpacity>

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
        <TouchableOpacity onPress={() => handleCheckBox()}>
          <View
            style={{
              backgroundColor: checkBox === true ? "white" : "transparent",
              width: 20,
              height: 20,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 4,
              // right: 85,
              top: 437,
              
            }}
          ></View>
        </TouchableOpacity>
          <Text
            numberOfLines={2}
            style={{
              color: "white",
              fontSize: 7,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              top: 420,
              right: -2-30,
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

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
        </TouchableOpacity>

        <View style={styles.text2}>
          <Text
            style={{
              color: "white",
              fontSize: 8,
              fontFamily: "Blair ITC.otf",
              textTransform: "uppercase",
              fontStyle: "normal",
              right: 30,
              top: 260,
            }}
          >
            Already have an account?{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.text2}>
            <Text
              style={{
                color: "grey",
                fontSize: 8,
                fontFamily: "Blair ITC.otf",
                textTransform: "uppercase",
                fontStyle: "normal",
                left: 125,
                top: 250,
              }}
            >
              {" "}
              sign in{" "}
            </Text>
          </View>
        </TouchableOpacity>
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
      <View styles={styles.container}>
        <View style={styles.wrapper}>
          {["male", "female"].map((feeling) => (
            <View key={feeling} style={styles.mood}>
              <Text style={styles.feeling}>{feeling}</Text>
              <TouchableOpacity
                style={styles.outer}
                onPress={() => setMood(feeling)}
              >
                {mood === feeling && <View style={styles.inner} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text
              style={{
                color: "white",
                fontSize: 10,
                fontFamily: "Blair ITC.otf",
                textTransform: "uppercase",
                fontStyle: "normal",
                right: 50,
                top:-20 ,
              }}
            >
              {" "}
              gender{" "}
            </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 130,
    right: 10,
    
    // color: 'white',
  },

  feeling: {
    fontSize: 5,
    color: "white",
    fontFamily: "Blair ITC.otf",
    textTransform: "uppercase",
  },

  mood: {
    marginHorizontal: 40,
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  outer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // color: 'white'
  },

  inner: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "black",
    alignItems: "center",
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
    bottom: 40,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    left: 20,
    top: 245,
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
    top: 240,
  },

  create: {
    fontFamily: "Blair ITC.otf",
    fontStyle: "normal",
    textAlign: "center",
    width: 322,
    height: 40,
    fontSize: 7,
    fontWeight: 500,
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    top: 235,
    left: -95,
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
    height: 35,
    width: 324,
    borderWidth: 1,
    borderColor: "gray",
    padding: 6,
    borderRadius: 30,
    backgroundColor: "white",
    fontFamily: "Blair ITC.otf",
    fontSize: 9,
  },
});
export default SignUp;
