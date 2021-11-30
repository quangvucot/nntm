import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
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
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <Text>You clicked {value} times</Text>
      </View>
    </View>
  );
};

export default SensorComponent;
