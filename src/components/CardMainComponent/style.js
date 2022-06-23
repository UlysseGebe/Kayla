import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: 343,
    height: 200,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 20,
    borderRadius: 12,
    marginHorizontal: (width - 343) / 2,
    marginBottom: 16,
  },
  imageContainer: {
    width: "100%",
    height: 135,
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageIcon: {
    position:"absolute",
    top: 8,
    left: 8,
    zIndex: 1,
  },
  image: {
    width: 343,
    height: 135,
    position:"absolute",
    bottom: 0,
  },
  textContainer: {
    width:"100%",
    height: 65,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 10,
    paddingRight: 12,
  },
  title: {
    color: "#005B85"
  },
  statContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
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
  }
});
