import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, button, Button } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
import Input from "../Common/Input";
const SensorComponent = (props) => {
  const [count, setCount] = React.useState(0);
  const [string, setString] = React.useState("2");
  const handleClick = () => {
    setCount(count + 1);
  };
  React.useEffect(() => {
    setCount(count);
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
        maxValue={100}
        inActiveStrokeWidth={6}
      ></CircularProgress>

      <View>
        <Text>You clicked {count} times</Text>
        <Button onPress={handleClick}>Click me</Button>
      </View>
    </View>
  );
};

export default SensorComponent;
