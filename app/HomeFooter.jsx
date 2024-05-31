import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import { EventRegister } from "react-native-event-listeners";
import EventEmitter from "eventemitter3";

const HomeFooter = ({ onClick, status }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingHorizontal: 15,
        }}
      >
        <Icons
          name="send"
          size={30}
          color="white"
          onPress={() => {
            status = !status;
            onClick(status);
          }}
        />
        {/* <Icons name="cog" size={30} color="white" onPress={emitter} /> */}
        {/* <Icons name="align-right" size={30} color="white" onPress={emitter} /> */}
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
