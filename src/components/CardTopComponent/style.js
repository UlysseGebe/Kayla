import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 262,
    height: 119,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.08,
    shadowRadius: 20,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginHorizontal: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 7,
    alignItems: "center",
    fontSize: 16,
    fontFamily: "Avenir",
    color: "#005B85"
  },
  text: {
    color: "#005B85",
    marginVertical: 16,
    fontSize: 14,
    fontFamily: "Avenir",
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    marginRight: 4,
  },
  statText: {
    color: "#3586AB",
    fontSize: 12,
    fontFamily: "Avenir",
  }
});
