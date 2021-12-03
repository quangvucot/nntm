import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CreateFarmComponent from "../../components/CreateFarmComponent";
import { useNavigation } from "@react-navigation/native";
const CreateFarm = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});

  const {
    farmDispatch,
    farmState: { error, loading, data },
  } = useContext(GlobalContext);

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
        return { ...prev, farmName: "Hãy Nhập Tên Vườn" };
      });
    }
    if (!form.location) {
      setErrors((prev) => {
        return { ...prev, location: "Không được để trống" };
      });
    }
    // if (!form.repeatPassword) {
    //   setErrors(prev => {
    //     return { ...prev, repeatPassword: 'Please Enter Your Password' };
    //   });
    // }

    if (
      Object.values(form).length === 8 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      console.log("Are you OK?", "Are you OK?");
    } else {
      console.log("Nothing ");
    }
  };
  return (
    <CreateFarmComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default CreateFarm;
