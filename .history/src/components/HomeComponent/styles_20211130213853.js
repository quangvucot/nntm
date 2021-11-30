import { StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#fd79a8",
  },
  name: {
    fontSize: 16,
  },
  location: {},
  time: {},
});
