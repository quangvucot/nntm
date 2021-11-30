import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, button, Button } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
import Input from "../Common/Input";
import axios from "axios";
const SensorComponent = (props) => {
  const [count, setCount] = React.useState(0);
  const [string, setString] = React.useState("2");
  const [valueSensor, setValueSensor] = React.useState("");
  React.useEffect(() => {});

  //   function printValues(obj) {
  //     for (var k in obj) {
  //       if (obj[k] instanceof Object) {
  //         console.log(obj["data"]["temperature"]);
  //       } else {
  //         console.log(obj["data"]["temperature"]);
  //       }
  //     }
  //   }
  const getDataUsingSimpleGetCall = () => {
    axios
      .get("http://159.223.56.85/api/getAllsensors")
      .then((response) => {
        var json = JSON.stringify(response.data);
        setValueSensor(json);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(valueSensor);
  };
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
        position={"center"}
        inActiveStrokeWidth={6}
      ></CircularProgress>

      <View>
        <Text>sfsdf{valueSensor.temperature}</Text>
        <Button onPress={() => {}} title="Click me">
          Click me
        </Button>
        <TouchableOpacity onPress={getDataUsingSimpleGetCall}>
          <Text>Xin choaf</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SensorComponent;
