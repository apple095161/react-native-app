import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import main from "./main";
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>設定!</Text>
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
export default function Home3() {
  const BottomTab = createBottomTabNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      // tabBar={(tabsProps) => (
      //   <>
      //     <BottomTabBar {...tabsProps} />
      //   </>
      // )}
      initialRouteName=""
      // screenOptions={{
      //   headerShown: false,
      //   style: styles.customBottomtabsStyle,
      //   tabBarActiveTintColor: colors.blackColor,
      //   tabBarInactiveTintColor: "gray",
      //   tabBarStyle: { backgroundColor: colors.themeColor },
      //   tabBarShowLabel: false,
      // }}
    >
      <BottomTab.Screen name="氣象" component={main} options={{}} />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{}}
      />
    </BottomTab.Navigator>
    // <NavigationContainer independent={true}>
    //   <Tab.Navigator initialRouteName="Home">
    //     <Tab.Screen
    //       name="最新氣象"
    //       component={HomeScreen}
    //       options={{
    //         tabBarLabel: "最新氣象",
    //         tabBarIcon: () => (
    //           <Icons name="lemon-o" size={30} color="rgba(20, 34, 70, 1.0)" />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen
    //       name="優惠活動"
    //       component={SettingsScreen}
    //       options={{
    //         tabBarLabel: "最新氣象",
    //         tabBarIcon: () => (
    //           <Icons name="gear" size={30} color="rgba(20, 34, 70, 1.0)" />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
    // <Stack>
    //   <Stack.Screen name="Home" />
    //   <Stack.Screen name="Profile" />
    //   {/* <Stack.Screen name="Profile" component={ProfileScreen} />
    //       <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} /> */}
    // </Stack>
  );
}
