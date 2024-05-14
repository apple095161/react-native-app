import { Redirect } from "expo-router";
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
export default function Index() {
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
  const [showSearch, setShowSearch] = useState(false);
  const onPress = () => {
    setShowSearch(!showSearch);
  };
  const click = (i) => {
    console.log(i);
  };
  useEffect(() => {
    console.log(getCountry());
    handlePress();
  });
  const handlePress = () => {
    fetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=rdec-key-123-45678-011121314"
    )
      .then((response) => response.json())
      .then((json) => {
        const filterData = json.records.locations[0].location
          .filter((item) => item.locationName === "燕巢區")[0]
          .weatherElement.filter((item) => item.elementName === "Wx");
        console.log(filterData[0].time);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* <StatusBar></StatusBar> */}
      <Image
        source={require("../assets/images/bg.jpeg")}
        style={{ position: "absolute", height: "100%" }}
      ></Image>
      <SafeAreaView style={{ flex: 1 }}>
        <View
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
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            高雄市,
            <Text style={{ color: "white" }}>燕巢區</Text>
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

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/cloud.png")}
            style={{ width: "300px", height: "300px" }}
          ></Image>
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
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={true}
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

              {/* <View style={styles.dailyWarter}>
                            <Image source={require('../assets/images/sun.png')} style={{ width: '30px', height: '30px', marginBottom: '5px' }}></Image>
                            <Text style={styles.fontSizeWrap}>星期二</Text>
                            <Text style={styles.fontSizeWrap2}>28&#176;</Text>
                        </View>
                        <View style={styles.dailyWarter}>
                            <Image source={require('../assets/images/heavyrain.png')} style={{ width: '30px', height: '30px', marginBottom: '5px' }}></Image>
                            <Text style={styles.fontSizeWrap}>星期三</Text>
                            <Text style={styles.fontSizeWrap2}>30&#176;</Text>
                        </View>
                        <View style={styles.dailyWarter}>
                            <Image source={require('../assets/images/heavyrain.png')} style={{ width: '30px', height: '30px', marginBottom: '5px' }}></Image>
                            <Text style={styles.fontSizeWrap}>星期四</Text>
                            <Text style={styles.fontSizeWrap2}>30&#176;</Text>
                        </View>
                        <View style={styles.dailyWarter}>
                            <Image source={require('../assets/images/cloud.png')} style={{ width: '30px', height: '30px', marginBottom: '5px' }}></Image>
                            <Text style={styles.fontSizeWrap}>星期五</Text>
                            <Text style={styles.fontSizeWrap2}>16&#176;</Text>
                        </View>
                        <View style={styles.dailyWarter}>
                            <Image source={require('../assets/images/cloud.png')} style={{ width: '30px', height: '30px', marginBottom: '5px' }}></Image>
                            <Text style={styles.fontSizeWrap}>星期六</Text>
                            <Text style={styles.fontSizeWrap2}>18&#176;</Text>
                        </View> */}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      {/* <Text>123456</Text>
            <Link href='/profile'>go to profile</Link> */}
    </View>
  );
}
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
