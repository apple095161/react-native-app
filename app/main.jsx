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
import { Redirect } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default function Main() {
  const Tab = createBottomTabNavigator();
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
  //   const onClick = (value) => {
  //     if (value) {
  //       Animated.timing(translate, {
  //         toValue: 1,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }).start();
  //       return;
  //     }
  //     Animated.timing(translate, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //   };
  useEffect(() => {});
  // useEffect(() => {
  //   // const fetchData = () => {
  //   //   const url =
  //   //     "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=rdec-key-123-45678-011121314";
  //   //   fetch(url)
  //   //     .then((response) => response.json())
  //   //     .then((json) => {
  //   //       console.log(json);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error(error);
  //   //     });
  //   // };
  //   // const getLocation = async () => {
  //   //   try {
  //   //     let status = await Location.requestForegroundPermissionsAsync();
  //   //     let { coords } = await Location.getCurrentPositionAsync();
  //   //     console.log(coords, map);
  //   //     // if (status !== "granted") {
  //   //     //   setLocationError("Location permission denied");
  //   //     //   return;
  //   //     // }
  //   //     // let location = await Location.getCurrentPositionAsync({});
  //   //     // fetchWeatherData(location.coords.latitude, location.coords.longitude);
  //   //   } catch (error) {
  //   //     console.error("Error requesting location permission:", error);
  //   //   }
  //   // };
  //   // getLocation();
  //   setIsLoading(false);
  // }, []);
  // if (isLoading) {
  //   return (
  //     <SafeAreaView style={styles.loading}>
  //       <ActivityIndicator size="large" />
  //       <Text>氣象載入中....</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <View style={{ position: "relative" }}>
      <ImageBackground
        source={require("../assets/images/rainday.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%", maxWidth: 767 }}
      >
        {/* <Animated.View
          ref={translate}
          style={[
            {
              position: "absolute",
              width: 250,
              height: "100%",
              zIndex: 888,
              backgroundColor: "white",
            },
            {
              transform: [{ translateX: animate }],
            },
          ]}
        >
          <SafeAreaView style={{}}>
            <View>
              <Text>123</Text>
            </View>
          </SafeAreaView>
        </Animated.View>
        <HomeFooter onClick={onClick} status={showmenu}></HomeFooter> */}
        <Home></Home>
      </ImageBackground>
    </View>
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
