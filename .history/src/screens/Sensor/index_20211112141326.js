import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Sensor = () => {
  const { setOptions } = useNavigation();
  useEffect(() => {
    setOptions({ headerLeft: () => <Text style={{ padding: 10 }}>NAV</Text> });
  }, []);
  return (
    <View>
      <Text>Sensor</Text>
    </View>
  );
};
export default Sensor;
