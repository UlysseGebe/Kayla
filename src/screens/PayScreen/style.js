import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F8FDFF",
    position: "relative"
  },
  top: {
    position: "absolute",
    top: 60,
    left: 10,
    zIndex: 2,
  },
  return: {
    fontSize: 16,
    fontFamily: "Avenir",
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
    fontFamily: "Avenir",
    letterSpacing: -0.297948,
  },
  background: {
    width,
    height,
    position: "absolute",
  },
  divider: {
    height: 32,
  },
  headline: {
    fontSize: 30,
    fontFamily: "Avenir",
    color: "#005B85",
  },
  appDesc: {
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Avenir",
    textAlign: "center",
    color: "#005B85",
    paddingHorizontal: 24,
  },
  appTitle: {
    textAlign: "center",
    fontSize: 35,
    fontFamily: "Avenir",
    fontWeight: "700",
    color: "#005B85",
  },
  header: {
    marginTop: 50,
  },
  itemContainer: {
    width,
    padding: 26,
  },
  itemContent: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E3F2F8",
    borderRadius: 12,
    paddingTop: 47,
    paddingBottom: 43,
    paddingHorizontal: 19,
  },
  itemPrice: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 32,
    color: "#3586AB",
    marginBottom: 28,
  },
  itemList: {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#005B85",
    marginBottom: 8,
  },
  itemBtn: {
    marginTop: 17,
    width: 255,
    height: 48,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#005B85",
  },
  itemBtnText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 16,
    color: "#FFFFFF",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 43.5,
    left: 0,
    right: 0,
  },
  navContainer: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginHorizontal: 9,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 50,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 16,
    color: "#005B85",
  }
});
