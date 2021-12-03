import React from "react";
import { View, Text } from "react-native";
import Input from "../Common/Input";
const CreateFarmComponent = () => {
  return (
    <View>
      <Input placeholder="Tên Vườn" lable={"Tên Vườn"}/>
      <Text>Xin chào. Mình là đào quang vũ đây</Text>
    </View>
  );
};

export default CreateFarmComponent;
