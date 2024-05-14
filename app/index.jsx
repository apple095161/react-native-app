import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Home from "./home";
export default function Index() {
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../assets/images/bg.jpeg")}
        style={{ position: "absolute", height: "100%" }}
      ></Image>
      <Home></Home>
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "row",
          height: "50px",
          backgroundColor: "rgb(46, 115, 184)",
          paddingTop: "15px",
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>123</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>123</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>123</Text>
        </View>
      </View> */}
    </View>
  );
}
