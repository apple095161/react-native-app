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
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { getCurrencies, getCountry } from "react-native-localize";
import DayWeaterLayout from "../components/weater/dayWeater";
import Icons from "react-native-vector-icons/FontAwesome";
import * as Location from "expo-location";
import Burger from "./burger";
export default function Home() {
  const [text, onChangeText] = useState("");
  const [location, setLocation] = useState([1, 2, 3, 4]);
  const [week, setWeek] = useState([
    {
      title: "星期一",
      icon: "heavyrain",
      temperature: "24",
    },
    {
      title: "星期二",
      icon: "sun",
      temperature: "28",
    },
    {
      title: "星期三",
      icon: "sun",
      temperature: "30",
    },
    {
      title: "星期四",
      icon: "cloud",
      temperature: "30",
    },
    {
      title: "星期五",
      icon: "cloud",
      temperature: "32",
    },
    {
      title: "星期六",
      icon: "sun",
      temperature: "33",
    },
    {
      title: "星期日",
      icon: "cloud",
      temperature: "25",
    },
  ]);
  const [status, setStatus] = useState([
    {
      status: "sun",
      descript: "風速27",
      icon: "sun-o",
    },
    {
      status: "moon",
      descript: "太陽",
      icon: "moon-o",
    },
    {
      status: "umbrella",
      descript: "下雨",
      icon: "umbrella",
    },
  ]);
  const [showSearch, setShowSearch] = useState(false);
  const onPress = () => {
    setShowSearch(!showSearch);
  };
  const clickEmit = (i) => {};
  useEffect(() => {
    handlePress();
    getLocation();
  });
  const getLocation = async () => {
    try {
      // let status = await Location.requestForegroundPermissionsAsync();
      let { coords } = await Location.getCurrentPositionAsync();
      const myPosition = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${22.6542609},${
          coords.longitude
        }&key=AIzaSyBuqwu7n7hZr3xMpZjw7IjkDltplqyANYk`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(coords);

      // if (status !== "granted") {
      //   setLocationError("Location permission denied");
      //   return;
      // }
      // let location = await Location.getCurrentPositionAsync({});
      // fetchWeatherData(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  };
  const handlePress = () => {
    fetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=rdec-key-123-45678-011121314"
    )
      .then((response) => response.json())
      .then((json) => {
        const filterData = json.records.locations[0].location
          .filter((item) => item.locationName === "燕巢區")[0]
          .weatherElement.filter((item) => item.elementName === "Wx");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={{ paddingBottom: "15px", paddingTop: "110px" }}>
      {/* <StatusBar></StatusBar> */}
      <SafeAreaView style={{ flex: 1, paddingTop: "30px" }}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* <Burger /> */}
          {/* <View
            style={{
              height: "7%",
              marginTop: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              zIndex: 50,
              left: 0,
            }}
          >
            <View
              style={{
                position: "relative",
              }}
            >
              {showSearch ? (
                <TextInput
                  placeholder="Search"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: "rgba(236, 245, 255, 0.5)",
                    height: "50px",
                    outlineStyle: "none",
                    paddingLeft: "10px",
                  }}
                  onChangeText={onChangeText}
                  value={text}
                ></TextInput>
              ) : null}
              <TouchableOpacity
                onPress={onPress}
                style={{
                  flex: 1,
                  backgroundColor: "rgba(236, 245, 255, 0.5)",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: 0,
                  height: "50px",
                  width: "50px",
                  borderRadius: "20px",
                }}
              >
                <Text>
                  <Icon name="search" size={30} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
            {location.length > 0 && showSearch ? (
              <View style={styles.searchWrap}>
                {location.map((item, i) => {
                  const showBorder = i + 1 !== location.length;
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={click}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "gray",
                        borderBottomColor: "gray",
                        borderBottomWidth: showBorder ? 2 : "",
                        padding: "10px",
                      }}
                    >
                      <Icon name="map-marker" size={30} color="black" />
                      <Text
                        style={{
                          fontSize: 16,
                          width: "100%",
                          paddingLeft: "5px",
                        }}
                      >
                        高雄市,楠梓區
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              ""
            )}
          </View> */}
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              高雄市,
              <Text style={{ color: "white" }}>前鎮區</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 48,
                fontWeight: "bold",
                padding: "10px",
                color: "white",
              }}
            >
              23&#176;
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 36,
                fontWeight: "bold",
                padding: "10px",
                color: "white",
              }}
            >
              多雲
            </Text>
          </View>
          {/* {dat()} */}
          <View
            style={{
              padding: "10px",
              opacity: 0.8,
              marginBottom: "10px",
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(20, 34, 70, 1.0)",
                paddingTop: 50,
                paddingBottom: 50,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "15px",
                  marginLeft: "15px",
                  flexWrap: "wrap",
                }}
              >
                {status.map((item, i) => {
                  return (
                    <View key={i} style={{ width: "50%" }}>
                      <View
                        style={{
                          borderBottomColor: "#606682",
                          borderBottomWidth: 1,
                          borderRightWidth: (i + 1) % 2 > 0 ? 1 : 0,
                          borderRightColor: "#606682",
                          padding: 20,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Icons name={item.icon} size={30} color="white" />
                        <Text style={{ color: "white" }}>{item.descript}</Text>
                      </View>
                    </View>
                  );
                })}
                {/* 
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      borderBottomColor: "#606682",
                      borderBottomWidth: 1,
                      padding: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Icons name="moon-o" size={30} color="white" />
                    <Text style={{ color: "white" }}>早上8:00</Text>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      borderBottomColor: "#606682",
                      borderBottomWidth: 1,
                      padding: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Icons name="moon-o" size={30} color="white" />
                    <Text style={{ color: "white" }}>早上8:00</Text>
                  </View>
                </View> */}
                {/* <View style={{ width: "50%" }}>
                  <View
                    style={{
                      borderBottomColor: "#606682",
                      borderBottomWidth: 1,
                      padding: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Icons name="moon-o" size={30} color="white" />
                    <Text style={{ color: "white" }}>早上8:00</Text>
                  </View>
                </View> */}
              </View>
              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  marginLeft: "15px",
                }}
              >
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      borderBottomColor: "#606682",
                      borderBottomWidth: 1,
                      borderRightWidth: 1,
                      borderRightColor: "#606682",
                      padding: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Icons name="location-arrow" size={30} color="white" />
                    <Text style={{ color: "white" }}>22風速</Text>
                  </View>
                </View>
                <View style={{ width: "50%" }}>
                  <View
                    style={{
                      borderBottomColor: "#606682",
                      borderBottomWidth: 1,
                      padding: 20,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Icons name="umbrella" size={30} color="white" />
                    <Text style={{ color: "white" }}>早上8:00</Text>
                  </View>
                </View>
              </View> */}
            </View>
          </View>
          <View style={{ padding: "10px", opacity: 0.8 }}>
            <DayWeaterLayout></DayWeaterLayout>
          </View>
          <View
            style={{
              height: "auto",
              width: "100%",
              padding: "10px",
            }}
          >
            <View
              style={{
                marginBottom: "10px",
                backgroundColor: "#2e73b8",
                borderRadius: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <Icon
                    name="calendar"
                    size={20}
                    color="white"
                    style={{ marginRight: "10px" }}
                  />
                  一周天氣預報
                </Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
              >
                {week.map((item, i) => {
                  return (
                    <View style={styles.dailyWarter} key={i}>
                      {item.icon === "sun" ? (
                        <Image
                          source={require("../assets/images/sun.png")}
                          style={styles.weaterImg}
                        ></Image>
                      ) : item.icon === "cloud" ? (
                        <Image
                          source={require("../assets/images/cloud.png")}
                          style={styles.weaterImg}
                        ></Image>
                      ) : (
                        <Image
                          source={require("../assets/images/heavyrain.png")}
                          style={styles.weaterImg}
                        ></Image>
                      )}
                      <Text style={styles.fontSizeWrap}>{item.title}</Text>
                      <Text style={styles.fontSizeWrap2}>
                        {item.temperature}&#176;
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <Text>123456</Text>
            <Link href='/profile'>go to profile</Link> */}
    </View>
  );
}

const dat = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/cloud.png")}
          style={{ width: "300px", height: "300px" }}
        ></Image>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingRight: "20px",
          paddingLeft: "20px",
          marginBottom: "10px",
        }}
      >
        <View
          style={{
            width: "50%",
            display: "flex",
            height: 100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(46, 115, 184)",
            marginRight: "5px",
            borderRadius: "15px",
          }}
        >
          <Image
            source={"../assets/icon/sun.png"}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          ></Image>
          <Text style={{ color: "white" }}>早上8:00</Text>
        </View>
        <View
          style={{
            width: "50%",
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(46, 115, 184)",
            marginLeft: "5px",
            borderRadius: "15px",
          }}
        >
          {/* <Icon name="map-marker" size={20} color="gray" /> */}
          <Image
            source={"../assets/icon/wind.png"}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          ></Image>
          <Text style={{ color: "white" }}>22風速</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <View
          style={{
            width: "50%",
            display: "flex",
            height: 100,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(46, 115, 184)",
            marginRight: "5px",
            borderRadius: "15px",
          }}
        >
          <Image
            source={"../assets/icon/sun.png"}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          ></Image>
          <Text style={{ color: "white" }}>早上8:00</Text>
        </View>
        <View
          style={{
            width: "50%",
            height: 100,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(46, 115, 184)",
            marginLeft: "5px",
            borderRadius: "15px",
          }}
        >
          {/* <Icon name="map-marker" size={20} color="gray" /> */}
          <Image
            source={"../assets/icon/wind.png"}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          ></Image>
          <Text style={{ color: "white" }}>22風速</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchWrap: {
    position: "absolute",
    width: "100%",
    backgroundColor: "rgba(236, 245, 255, 1)",
    borderRadius: "15px",
    marginTop: "10px",
    width: "100%",
    top: "60px",
  },
  inputWrap: {
    position: "relative",
    flexDirection: "row",
    borderRadius: "10px",
    marginTop: "10px",
    borderWidth: "0px",
    outlineStyle: "none",
  },
  dailyWarter: {
    display: "flex",
    marginRight: "15px",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "auto",
    backgroundColor: "rgba(236, 245, 255, 0.5)",
    borderRadius: "15px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  fontSizeWrap: {
    fontSize: 20,
    padding: "10px",
  },
  fontSizeWrap2: {
    fontSize: 18,
    padding: "10px",
  },
  weaterImg: {
    width: "30px",
    height: "30px",
    marginBottom: "15px",
    marginTop: "15px",
  },
});
