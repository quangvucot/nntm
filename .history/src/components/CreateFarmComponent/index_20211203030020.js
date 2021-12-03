import React from "react";
import { View, Text } from "react-native";
import Container from "../Common/Container";
import Input from "../Common/Input";
const CreateFarmComponent = () => {
  return (
    <Container>
      <Input placeholder={"Tên Vườn"} lable={"Tên Vườn"} />
    </Container>
  );
};

export default CreateFarmComponent;
