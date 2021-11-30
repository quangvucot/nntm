import React from "react";
import { View, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import Container from "../Common/Container";
const SensorComponent = ({ value, title, setValue }) => {
  const { valueSensor, setValueSensor } = useState(0);
  return (
    <Container>
      <CircularProgress
        radius={90}
        value={85}
        fontSize={20}
        valueSuffix={"%"}
        inActiveStrokeColor={"#2ecc71"}
        inActiveStrokeOpacity={0.2}
        duration={3000}
        inActiveStrokeWidth={6}
        onAnimationComplete={() => {
          setValueSensor(50);
        }}
      ></CircularProgress>
    </Container>
  );
};

export default SensorComponent;
