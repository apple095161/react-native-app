import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { EventRegister } from "react-native-event-listeners";

const HomeFooter = (props) => {
  const emitter = () => {
    console.log("1");
    EventRegister.emit("myData", true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: "15px" }}>
        <Icons name="moon-o" size={30} color="white" onPress={emitter} />
      </Text>
    </View>
  );
};

export default HomeFooter;

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
});
