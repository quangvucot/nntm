import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Sensor = () => {
  const { setOptions } = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Text style={{ padding: 10 }}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <Text>Sensor</Text>
    </View>
  );
};
export default Sensor;
