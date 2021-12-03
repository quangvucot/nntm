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
      />
      <Input
        placeholder={"Nhập Ngày Tạo Vườn"}
        lable={"Ngày Tạo Vườn"}
        value={form.timeStart || null}
      />
      <Input
        placeholder={"Nhập Quốc Gia"}
        lable={"Quốc Gia"}
        value={form.area || null}
      />
      <Input
        placeholder={"Nhập ID Cây"}
        lable={"ID Cây"}
        value={form.treeID || null}
      />

      <Input
        placeholder={"Nhập ID Thiết bị"}
        lable={"ID Thiết Bị"}
        value={form.personID || null}
      />
      <Input
        placeholder={"Nhập ID Người Dùng"}
        lable={"ID Người Dùng"}
        value={form.personID || null}
      />
      <CustomButton title={"Thêm Vườn"} primary />
    </Container>
  );
};

export default CreateFarmComponent;
