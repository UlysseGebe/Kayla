import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F8FDFF",
    justifyContent: "center",
  },
  top: {
    position: "relative",
    height: height * 0.1,
    left: 10,
  },
  topContent: {
    position: "absolute",
    zIndex: 1,
    left: 10,
  },
  return: {
    fontSize: 16,
    letterSpacing: -0.29,
  },
  returnIcon: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  returnText: {
    color: "#005B85",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: -0.297948,
  },
  background: {
    width,
    height,
    position: "absolute",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 35,
    fontWeight: "800",
    color: "#3586AB",
  },
  subtitle: {
    marginTop: 17,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 24,
    lineHeight: 35,
    fontWeight: "500",
    color: "#005B85",
  },
  text: {
    marginTop: 16,
    marginBottom: 80,
    textAlign: "center",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "400",
    color: "#005B85",
  },
  inputInt: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    paddingRight: 24,
    paddingLeft: 24,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 48,
  },
  btn: {
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
  btnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
  // btn: {
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   marginTop: 14,
  //   marginBottom: 14,
  // },
  connectionText: {
    color: "#005B85",
    fontWeight: "900",
    fontSize: 16,
  },
});
