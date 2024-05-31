import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Stack,
  ImageBackground,
  ActivityIndicator,
  Animated,
} from "react-native";
import * as Location from "expo-location";
import Home from "./home";
import HomeFooter from "./HomeFooter";
import { EventRegister } from "react-native-event-listeners";
import EventEmitter from "eventemitter3";
import Icons from "react-native-vector-icons/FontAwesome";
import Main from "./main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Redirect } from "expo-router";
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showmenu, setShowmenu] = useState(false);

  const translate = useRef(new Animated.Value(0)).current;

  const myRef = useRef(null);

  const animate = translate.interpolate({
    inputRange: [0, 1],
    outputRange: ["-250px", "0px"],
  });
  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const BottomTab = createBottomTabNavigator();
  const onClick = (value) => {
    if (value) {
      Animated.timing(translate, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      return;
    }
    Animated.timing(translate, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Redirect href="/home3" />
    // <View>
    //   <BottomTab.Navigator
    //     // tabBar={(tabsProps) => (
    //     //   <>
    //     //     <BottomTabBar {...tabsProps} />
    //     //   </>
    //     // )}
    //     initialRouteName="main"
    //     // screenOptions={{
    //     //   headerShown: false,
    //     //   style: styles.customBottomtabsStyle,
    //     //   tabBarActiveTintColor: colors.blackColor,
    //     //   tabBarInactiveTintColor: "gray",
    //     //   tabBarStyle: { backgroundColor: colors.themeColor },
    //     //   tabBarShowLabel: false,
    //     // }}
    //   >
    //     <BottomTab.Screen name="main" component={HomeScreen} />
    //     <BottomTab.Screen name="SettingsScreen" component={SettingsScreen} />
    //   </BottomTab.Navigator>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgb(46, 115, 184)",
    zIndex: 888,
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    /* height: 100%; */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "azure",
    zIndex: 999,
  },
  opacity: {
    left: 0,
  },
});
