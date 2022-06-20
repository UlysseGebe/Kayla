import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 200,
    height: 126,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 20,
    borderRadius: 12,
    marginHorizontal: 6,
  },
  imageContainer: {
    width: "100%",
    height: 80,
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  image: {
    width: 200,
    height: 80,
    position:"absolute",
    bottom: 0,
  },
  textContainer: {
    width:"100%",
    height: 65,
    paddingTop: 4,
    paddingLeft: 8,
    paddingBottom: 4,
    paddingRight: 8,
  },
  title: {
    color: "#005B85",
    fontSize: 14,
  },
  date: {
    marginTop: 2,
    color: "#3586AB",
  }
});
