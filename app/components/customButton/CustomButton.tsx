import { Platform } from "react-native";


const CustomButton = Platform.select({
  ios: require("./CustomButton.ios").default,
  android: require("./CustomButton.android").default,
});

export default CustomButton