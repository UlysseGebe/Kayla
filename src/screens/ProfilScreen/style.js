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
  nav: {
    flexDirection: "row",
    justifyContent: "center",
  },
  navContainer: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginHorizontal: 9,
  },
  subTitle: {
    margin: 16,
    fontSize: 24,
    fontFamily: "Avenir",
    lineHeight: 35,
    fontWeight: "500",
    color: "#005B85",
  },
});
