import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  base: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F8FDFF",
  },
  top: {
    position: "absolute",
    top: 60,
    left: 10,
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
    textAlign: "center",
    color: "#005B85",
  },
  header: {
    padding: 32,
  },
  input: {
    color: "#005B85",
    borderBottomWidth: 2,
    borderColor: "#AECCDA",
    fontSize: 18,
    fontFamily: "Avenir",
    fontWeight: "900",
    paddingBottom: 5,
  },
  input_focused: {
    borderColor: "#005B85",
    color: "#005B85",
    fontSize: 18,
    fontFamily: "Avenir",
    fontWeight: "900",
    paddingBottom: 5,
    borderBottomWidth: 2,
  },
  inputPwdContainer: {
    position: "relative",
  },
  inputContainer: {
    position: "relative",
  },
  inputEye: {
    position: "absolute",
    right: 0,
  },
  validate: {
    position: "absolute",
    right: 0,
  },
  appTitle: {
    textAlign: "center",
    fontSize: 35,
    fontFamily: "Avenir",
    fontWeight: "700",
    color: "#005B85",
  },
  connexion: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 14,
    marginBottom: 14,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 84,
    paddingLeft: 84,
    borderRadius: 50,
  },
  connexionText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Avenir",
    lineHeight: 21.86,
    fontWeight: "900",
  },
  lost: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 14,
    marginBottom: 14,
  },
  lostText: {
    color: "#005B85",
    fontSize: 16,
    fontFamily: "Avenir",
    lineHeight: 21.86,
    fontWeight: "900",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
