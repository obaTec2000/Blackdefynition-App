import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardScreen from './src/screens/OnBoardScreeen';
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp';
import Forgot from './src/screens/Forgot';
import ConfirmOtp from './src/screens/ConfirmOtp';
import Reset from './src/screens/Reset'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Forgot" component={Forgot} />
       <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
       <Stack.Screen name="Reset" component={Reset} /> */}

     
    </Stack.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  )
}

export default Navigation

const styles = StyleSheet.create({})
