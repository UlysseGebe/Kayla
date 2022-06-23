import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width,
    zIndex: 9,
  },
  content: {
    width: 343,
    paddingHorizontal: 24,
    flexDirection: "row",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: 280,
  },
  input: {
    width: "100%",
    height: 44,
    alignItems: "center",
    color: "#005B85",
    fontSize: 14,
    paddingLeft: 12,
    paddingRight: 34,
    fontWeight: "500",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
  },
  input_focused: {
    borderColor: "#005B85",
  },
  loupeContainer: {
    position: "absolute",
    right: 12,
  },
  filter: {
    width: 44,
    height: 44,
    backgroundColor: "#E5EFF3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginLeft: 4,
  },
  swipeContainer: {
    width: width,
  },
  head: {
    width: 70,
    height: 5,
    backgroundColor: "#005B85",
    borderRadius: 100,
    marginVertical: 16,
    marginLeft: "auto",
    marginRight: "auto",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    marginHorizontal: 16,
  },
  listContainer: {
    width: width,
  },
  btn2: {
    width: 157,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
  },
  btn3: {
    width: 100,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
  },
  btnText: {
    color: "#005B85",
  },
  objectContainer: {
    padding: 20
  },
  object: {
    width: 104,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5EFF3",
    borderRadius: 8,
  },
  objectP: {
    fontWeight: "900",
    fontSize: 24,
    color: "#005B85",
  },
  objectText: {
    width: 104,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    color: "#005B85",
  },
  inputObject: {
    width: "100%",
    height: 44,
    alignItems: "center",
    color: "#005B85",
    fontSize: 14,
    paddingLeft: 12,
    paddingRight: 34,
    fontWeight: "500",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: "#AECCDA",
  },
  input_focusedObject: {
    borderColor: "#005B85",
  },
});
