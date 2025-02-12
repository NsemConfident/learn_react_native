import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { style } from "./PrevTuto";

const SafeArea = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      {/* safe area help you place your content at best position on the screen */}
      {/* NOW WE USE A THE PLATFORM MODULE TO TARGET A SPERCIFIC PLATFORM */}
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SafeArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0, //using the platform spercific module to apply styling only to android
  },
  SafeArea: { flex: 1, backgroundColor: "plum" },
  box: {
    padding: 20,
  },
  text: {
    // best way to use Platform to apply platfrom spercific styles
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
