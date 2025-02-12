import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  onPress: () => void;
  title: string;
}
const CustomButton = ({ onPress, title }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRadius: 24,
        padding: 10,
      }}
    >
      <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
