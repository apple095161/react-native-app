import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const burgerMenu = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.burgerWrap}>
        <View style={styles.burgerItem}></View>
        <View style={styles.burgerItem}></View>
        <View style={styles.burgerItem}></View>
      </View>
    </View>
  );
};

export default burgerMenu;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(46, 115, 184)",
  },
  burgerWrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  burgerItem: {
    width: "50%",
    height: 2,
    backgroundColor: "white",
    marginBottom: 3,
    marginTop: 3,
  },
});
