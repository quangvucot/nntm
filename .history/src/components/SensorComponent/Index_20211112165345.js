import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, button } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = (props) => {
  const [value, setValueSensor] = useState(2);
  const [string, setString] = useState("2");
  useEffect(() => {
    setInterval(() => {
      setValueSensor = value + 1;
    }, 1000);
  });
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
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity onClick={() => setString(value + "conme")}>
          <Text>Click</Text>
        </TouchableOpacity>
        <Text>You clicked {string} times</Text>
      </View>
    </View>
  );
};

export default SensorComponent;
