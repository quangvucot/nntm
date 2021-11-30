import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeName";
import Message from "../Common/Message";

const RegisterComponent = ({
  onSubmit,
  onChange,
  errors,
  form,
  error,
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const { navigate } = useNavigation();
  return (
    <Container>
      <View>
        <Text style={styles.title}>Welcome to Vu's Software</Text>
        <Text style={styles.subtitle}>Create new free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              retry
              retryFn={() => {
                console.log("2222 => ", 2222);
              }}
              message={error.error}
            />
          )}
          <Input
            lable="Họ Tên"
            iconPosition="right"
            placehoder="Họ Tên"
            onChangeText={() => {}}
          />
          <Input
            lable="Số Điện Thoại"
            iconPosition="right"
            placehoder="Số Điện Thoại"
            onChangeText={() => {}}
          />
          <Input
            lable="Username"
            iconPosition="right"
            placehoder="Nhập Username"
            onChangeText={() => {}}
          />
          <Input
            lable="Mật Khẩu"
            icon={
              <TouchableOpacity
                onPress={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                }}
              >
                <Text>{showPassword ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={showPassword}
            placehoder="Nhập Mật Khẩu"
            onChangeText={() => {}}
          />

          <Input
            lable="Nhập lại Mật Khẩu"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            placehoder="Enter Repeat Password"
            onChangeText={() => {}}
          />
          {console.log("error1122", error)}
          <CustomButton
            onPress={onSubmit}
            primary
            title="Submit"
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already a new account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
