import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CreateFarmComponent from "../../components/CreateFarmComponent";
import { useNavigation } from "@react-navigation/native";
const CreateFarm = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== "") {
      setErrors((prev) => {
        return { ...prev, [name]: null };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: "Không được để trống" };
      });
    }
  };
  const onSubmit = () => {
    //Validations
    // console.log('form :>> ', form);
    if (!form.farmName) {
      setErrors((prev) => {
        return { ...prev, username: "Hãy Nhập Tên Vườn" };
      });
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: "Điền mật khẩu của bạn" };
      });
    }
    // if (!form.repeatPassword) {
    //   setErrors(prev => {
    //     return { ...prev, repeatPassword: 'Please Enter Your Password' };
    //   });
    // }
    if (!form.phoneNumber) {
      setErrors((prev) => {
        return { ...prev, phoneNumber: "Nhập đúng số điện thoại của bạn" };
      });
    }

    if (
      Object.values(form).length === 3 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, { data: response });
      });
    } else {
      console.log("Nothing ");
    }
  };
  return <CreateFarmComponent />;
};

export default CreateFarm;
