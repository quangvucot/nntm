import React, { useState } from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = () => {
  const [value, setValueSensor] = useState(0);
  return (
    <View>
      <CircularProgress
        radius={90}
        value={85}
        fontSize={20}
        valueSuffix={"%"}
        inActiveStrokeColor={"#2ecc71"}
        inActiveStrokeOpacity={0.2}
        duration={3000}
        inActiveStrokeWidth={6}
      ></CircularProgress>
    </View>
  );
};

export default SensorComponent;
