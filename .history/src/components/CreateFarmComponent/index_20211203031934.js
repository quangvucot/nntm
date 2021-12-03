import React from "react";
import { View, Text } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
const CreateFarmComponent = ({
  onChange,
  onSubmit,
  loading,
  form,
  errors,
  error,
}) => {
  return (
    <Container>
      <Input
        placeholder={"Nhập Tên Vườn"}
        lable={"Tên Vườn"}
        value={form.farmName || null}
        onChangeText={(value) => {
          onChange({ name: "farmName", value });
        }}
        error={errors.farmName || error?.farmName?.[0]}
      />
      <Input
        placeholder={"Nhập Địa Chỉ"}
        lable={"Địa Chỉ"}
        value={form.location || null}
        onChangeText={(value) => {
          onChange({ name: "location", value });
        }}
        error={errors.location || error?.location?.[0]}
      />
      <Input
        placeholder={"Nhập Ngày Tạo Vườn"}
        lable={"Ngày Tạo Vườn"}
        value={form.timeStart || null}
        onChangeText={(value) => {
          onChange({ name: "timeStart", value });
        }}
        error={errors.timeStart || error?.timeStart?.[0]}
      />
      <Input
        placeholder={"Nhập Quốc Gia"}
        lable={"Quốc Gia"}
        value={form.area || null}
        onChangeText={(value) => {
          onChange({ name: "area", value });
        }}
        error={errors.area || error?.area?.[0]}
      />
      <Input
        placeholder={"Nhập ID Cây"}
        lable={"ID Cây"}
        value={form.treeID || null}
        onChangeText={(value) => {
          onChange({ name: "farmName", value });
        }}
        error={errors.farmName || error?.farmName?.[0]}
      />

      <Input
        placeholder={"Nhập ID Thiết bị"}
        lable={"ID Thiết Bị"}
        value={form.personID || null}
        onChangeText={(value) => {
          onChange({ name: "farmName", value });
        }}
        error={errors.farmName || error?.farmName?.[0]}
      />
      <Input
        placeholder={"Nhập ID Người Dùng"}
        lable={"ID Người Dùng"}
        value={form.personID || null}
        onChangeText={(value) => {
          onChange({ name: "farmName", value });
        }}
        error={errors.farmName || error?.farmName?.[0]}
      />
      <CustomButton title={"Thêm Vườn"} primary />
    </Container>
  );
};

export default CreateFarmComponent;
