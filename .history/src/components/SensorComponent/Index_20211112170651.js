import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, button } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = (props) => {
  const [count, setCount] = React.useState(0);
  const [string, setString] = React.useState("2");
  const handleClick = () => {
    setCount(count + 1);
  };
  React.useEffect(() => {
    const toggle = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(toggle);
  });
  return (
    <View>
      <CircularProgress
        radius={90}
        value={count}
        fontSize={20}
        valueSuffix={"°c"}
        inActiveStrokeColor={"#FF0000"}
        inActiveStrokeOpacity={0.2}
        duration={3000}
        inActiveStrokeWidth={6}
      ></CircularProgress>

      <View>
        <TouchableOpacity onClick={() => handleClick}>
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity onClick={() => setString(value + "conme")}>
          <Text>Click</Text>
        </TouchableOpacity>
        <Text>You clicked {count} times</Text>
      </View>
    </View>
  );
};

export default SensorComponent;
