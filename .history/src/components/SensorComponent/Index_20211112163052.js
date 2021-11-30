import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = () => {
  const [value, setValueSensor] = useState(2);
  return (
    <View>
      <CircularProgress
        radius={90}
        value={value}
        fontSize={20}
        valueSuffix={"°c"}
        inActiveStrokeColor={"#FF0000"}
        inActiveStrokeOpacity={0.2}
        duration={3000}
        inActiveStrokeWidth={6}
      ></CircularProgress>

      <View>
        <TouchableOpacity onClick={() => setValueSensor(value + 1)}>
          <Text>Chạm {value}</Text>
        </TouchableOpacity>
        <p>You clicked {value} times</p>
      </View>
    </View>
  );
};

export default SensorComponent;
