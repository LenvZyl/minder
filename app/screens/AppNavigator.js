import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Animated, Easing, Button } from 'react-native';
import { createDrawerNavigator, DrawerItems, StackNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import SettingsScreen from './SettingsScreen'

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./../assets/pp.jpg')} style={{height: 120, width: 120, borderRadius: 60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const LogoutDrawerComponent = (props) => (
  <View style={{flex:1}}>
    <SafeAreaView forceInset={{ bottom: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
        <Button title="Logout" onPress={() => console.log()}/>
    </SafeAreaView>
  </View>
)

const AppNavigator = createDrawerNavigator ({
  Home: HomeScreen,
  Setting: SettingsScreen
},{ 
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'black'
  }
})

const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
})

const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: AppNavigator }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav