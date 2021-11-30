import React from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = ({ value, title }) => {
  return (
    <Container>
      <CircularProgress
        radius={90}
        value={value}
        fontSize={20}
        valueSuffix={"%"}
        inActiveStrokeColor={"#2ecc71"}
        inActiveStrokeOpacity={0.2}
      ></CircularProgress>
    </Container>
  );
};

export default SensorComponent;
