import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "../components/customButton/CustomButton.android";

const index = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Text style={style.text}>welcome</Text>
        <CustomButton
          title="platform button"
          onPress={() => alert("welcome to react native")}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
