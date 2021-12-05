import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ControllerComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);

  const toggleSwitch = () => {
    if (value == 1) {
      setIsEnabled(true);
    } else if (value == 0) {
      setIsEnabled(false);
    }
    setIsEnabled((value) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        // onValueChange={toggleSwitch}
        value={value == 0 ? true : false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ControllerComponent;
