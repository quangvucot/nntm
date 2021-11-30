import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = () => {
  const [value, setValueSensor] = useState(0);
  return (
    <View>
      <CircularProgress
        radius={90}
        value={value}
        fontSize={20}
        valueSuffix={"%"}
        inActiveStrokeColor={"#FF0000"}
        inActiveStrokeOpacity={0.2}
        duration={3000}
        inActiveStrokeWidth={6}
      ></CircularProgress>
      <TouchableOpacity onClick={(value) => setValueSensor(value + 1)}>
        <Text>Chạm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SensorComponent;
