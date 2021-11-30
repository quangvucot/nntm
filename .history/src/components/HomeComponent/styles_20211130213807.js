import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  item: {
    borderRadius: 10,
    backgroundColor: "#fd79a8",
  },
  name: {
    fontSize: 16,
  },
  location: {},
  time: {},
});
