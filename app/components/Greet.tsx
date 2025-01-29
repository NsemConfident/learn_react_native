import { View, Text } from "react-native";
import React from "react";

export type props = {
  name: string;
};
const Greet = ({ name }: props) => {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
};

export default Greet;
