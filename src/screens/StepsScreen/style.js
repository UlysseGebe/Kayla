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
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  navNumberContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
  },
  navTrait: {
    height: 1,
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
    width: 255,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    backgroundColor: "#005B85",
  },
  btnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
  connectionText: {
    color: "#005B85",
    fontWeight: "900",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtons: {
    flexDirection: "row",
  },
  modalButton: {
    borderRadius: 50,
    elevation: 2,
    width: 120,
    height: 48,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#005B85",
    borderWidth: 1.5
  },
  modalButtonClose: {
    backgroundColor: "#E05457",
    borderWidth: 0,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
