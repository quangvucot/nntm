import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Common/Icons";
import SensorComponent from "../../components/SensorComponent/Index";
const Sensor = () => {
  const {valueSensor, setValueSensor} = useState(0);
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
 <SensorComponent
  );
};
export default Sensor;
