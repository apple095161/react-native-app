import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";
type Style = {
  dayWarter: ViewStyle;
  fontSizeWrap: TextStyle;
  fontSizeWrap2: TextStyle;
  fontFolorWhite: TextStyle;
  weaterImg: ImageStyle;
};
export default function DayWeaterLayout() {
  return (
    <View
      style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#2e73b8",
        borderRadius: 15,
      }}
    >
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            borderBottomWidth: 2,
            borderBottomColor: "white",
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
          }}
        >
          預計下午3點晴時多雲。
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.dayWarter}>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>現在</Text>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={styles.weaterImg}
          ></Image>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
            23&#176;
          </Text>
        </View>
        <View style={styles.dayWarter}>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>現在</Text>
          <Image
            source={require("../../assets/images/sun.png")}
            style={styles.weaterImg}
          ></Image>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
            23&#176;
          </Text>
        </View>
        <View style={styles.dayWarter}>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>現在</Text>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={styles.weaterImg}
          ></Image>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
            23&#176;
          </Text>
        </View>
        <View style={styles.dayWarter}>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>現在</Text>
          <Image
            source={require("../../assets/images/sun.png")}
            style={styles.weaterImg}
          ></Image>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
            23&#176;
          </Text>
        </View>
        <View style={styles.dayWarter}>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>現在</Text>
          <Image
            source={require("../../assets/images/heavyrain.png")}
            style={styles.weaterImg}
          ></Image>
          <Text style={[styles.fontSizeWrap, styles.fontFolorWhite]}>
            23&#176;
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  dayWarter: {
    display: "flex",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  fontSizeWrap: {
    fontSize: 20,
  },
  fontSizeWrap2: {
    fontSize: 18,
  },
  fontFolorWhite: {
    color: "white",
  },
  weaterImg: {
    width: 30,
    height: 30,
    marginBottom: 15,
    marginTop: 15,
  },
});
