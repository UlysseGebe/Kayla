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
    fontFamily: "Avenir",
    lineHeight: 35,
    fontWeight: "500",
    color: "#005B85",
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
});
