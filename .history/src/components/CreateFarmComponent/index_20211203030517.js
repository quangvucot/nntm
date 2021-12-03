import React from "react";
import { View, Text } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
const CreateFarmComponent = ({ onChange, onSubmit, loading, form, error }) => {
  return (
    <Container>
      <Input placeholder={"Nhập Tên Vườn"} lable={"Tên Vườn"} />
      <Input placeholder={"Nhập Địa Chỉ"} lable={"Địa Chỉ"} />
      <Input placeholder={"Nhập Tên Vườn"} lable={"Tên Vườn"} />
      <Input placeholder={"Nhập Ngày Tạo Vườn"} lable={"Ngày Tạo Vườn"} />
      <Input placeholder={"Nhập ID Cây"} lable={"ID Cây"} />
      <Input placeholder={"Nhập ID Thiết bị"} lable={"ID Thiết Bị"} />
      <Input placeholder={"Nhập ID Người Dùng"} lable={"ID Người Dùng"} />
      <CustomButton title={"Thêm Vườn"} primary />
    </Container>
  );
};

export default CreateFarmComponent;
