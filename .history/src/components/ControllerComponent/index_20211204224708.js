import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ControllerComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const valueCheck = 0;
  const toggleSwitch = () => {
    if (valueCheck == 1) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
    console.log(valueCheck);
    setIsEnabled((previousState) => {
      console.log("Check", previousState);
      setIsEnabled(!previousState);
      valueCheck = 1;
    });
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
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
