import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F8FDFF",
    padding: 16,
  },
  top: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  return: {
    fontSize: 16,
    letterSpacing: -0.29,
    justifyContent: "center",
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
  statContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    marginRight: 8,
  },
  statText: {
    color: "#3586AB",
  },
  descriptionContainer: { padding: 16 },
  description: { color: "#005B85" },
  matContainer: {
    margin: 16,
    padding: 9,
    backgroundColor: "#E7F6FD",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 20,
  },
  start: {
    justifyContent: "center",
    width: 255,
    height: 48,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    backgroundColor: "#005B85",
  },
  startText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 21.86,
    fontWeight: "900",
  },
});
