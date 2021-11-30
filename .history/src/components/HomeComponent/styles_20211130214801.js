import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    margin: 10,
    backgroundColor: "#fd79a8",
  },
  item: {
    width: "25%",
    flex: 1,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
  },
  location: {},
  time: {},
});
