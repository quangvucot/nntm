import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Common/Icons";
const Sensor = () => {
  const { setOptions, toggleDrawer } = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}
        >
          <Icon
            style={{ padding: 10 }}
            type="materialIcon"
            size={25}
            name="menu"
          />
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
