import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  nav: {
    width,
    height: 104,
    flexDirection: "row",
  },
  background: {
    width,
    height: 104,
    position: "absolute",
    bottom: 0,
  },
  btn: {
    width: width / 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
