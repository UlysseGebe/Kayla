import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };
export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F8FDFF",
    justifyContent: "center",
  },
  background: {
    width,
    height,
    position: "absolute",
  },
  appTitle: {
    marginBottom: 17,
    textAlign: "center",
    fontSize: 32,
    lineHeight: 35,
    fontWeight: "800",
    color: "#3586AB",
    fontFamily: "Avenir",
  },
  subTitle: {
    marginTop: 17,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "500",
    color: "#005B85",
    fontFamily: "Avenir",
  },
  kaylaCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  kayla: {
    textAlign: "center",
  },
  text: {
    marginTop: 16,
    marginBottom: 80,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    color: "#005B85",
    fontFamily: "Avenir",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 48,
  },
  start: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 14,
    marginBottom: 14,
    paddingTop: 23,
    paddingBottom: 23,
    paddingRight: 84,
    paddingLeft: 84,
    borderRadius: 50,
    backgroundColor: "#005B85",
  },
  startText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    fontFamily: "Avenir",
  },
  connection: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 14,
    marginBottom: 14,
  },
  connectionText: {
    color: "#005B85",
    fontWeight: "900",
    fontSize: 16,
    fontFamily: "Avenir",
  },
});
