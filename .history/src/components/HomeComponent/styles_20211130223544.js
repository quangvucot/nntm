import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: "rgba(255,255, 255, 0.7)",
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    borderRadius: 15,
  },
  item: {
    padding: 20,
    flex: 1,
  },
  name: {
    paddingBottom: 15,
    fontSize: 16,
  },
  location: { paddingBottom: 15 },
  time: { fontSize: 14 },

  addFarm: {
    backgroundColor: "yellow",
    borderRadius: 20,
  },
  textFarm: {
    fontSize: 16,
  },
});
