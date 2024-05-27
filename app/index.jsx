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
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const fadeIn = useRef(new Animated.Value(0)).current;
  const spin = fadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: ["-250px", "0px"],
  });

  useEffect(() => {
    const aaa = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    aaa();
    console.log(fadeIn);

    const emit = () => {
      EventRegister.addEventListener("myData", (data) => {
        console.log(data);
      });
      return () => {
        EventRegister.removeEventListener(emit);
      };
    };
    // Animated.timing(fadeIn, {
    //   toValue: 1,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();

    // setTimeout(() => {
    //   Animated.timing(fadeIn, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }).start();
    // }, 3000);
  }, []);
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
      <Animated.View
        ref={fadeIn}
        style={[
          {
            position: "absolute",
            width: 250,
            height: "100%",
            zIndex: 888,
            backgroundColor: "white",
          },
          {
            transform: [{ translateX: spin }],
          },
        ]}
      >
        <SafeAreaView style={{}}>
          <View>123</View>
        </SafeAreaView>
      </Animated.View>
      <HomeFooter></HomeFooter>
      <ImageBackground
        source={require("../assets/images/123.jpeg")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      ></ImageBackground>
      <Home></Home>
    </View>
  );
}
const styles = StyleSheet.create({
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
