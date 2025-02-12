import { View, Text, StyleSheet, ScaledSize, useWindowDimensions } from "react-native";
import React, { Children, useEffect, useState } from "react";

export type Props = {
  children: React.ReactNode;
  style?: object;
};
const Box = ({ children, style }: Props) => {
  
  const {height, width} = useWindowDimensions();
  const windowWidth= width;
  const windowHeight= width;
  return (
    <View
      style={[
        mystyle.box,
        {
          width: windowWidth > 500 ? "70%" : "90%",
          height: windowHeight > 500 ? "60%" : "90%",
          backgroundColor: "#1c4c56",
        },
      ]}
    >
      <Text style={{ fontSize: windowHeight > 500 ? 50 : 24 }}>{children}</Text>
    </View>
  );
};

export default Box;

// const windowWidth = Dimensions.get("window").width; //Dimension.get("window") returns an object with height and width
// const windowHeight = Dimensions.get("window").height;

const mystyle = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "60%" : "90%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
