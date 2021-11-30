import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  item: {
    width: "25%",
    flex: 1,
  },
  name: {
    fontSize: 16,
  },
  location: {},
  time: {},
});
