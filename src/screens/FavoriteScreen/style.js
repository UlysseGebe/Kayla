import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FDFF",
    padding: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    width,
    height,
    position: "absolute",
  },
  subTitle: {
    margin: 16,
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "500",
    color: "#005B85",
  },
});
