import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeName";
import Message from "../Common/Message";

const LoginComponent = ({
  error,
  onChange,
  justSignedUp,
  onSubmit,
  loading,
  form,
}) => {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Container>
      <Image style={styles.logo} height={80} width={80} />
      <View>
        <Text style={styles.title}>Welcome to Vu's Software</Text>
        <Text style={styles.subtitle}>Please login here</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error.error} />}
          <Input
            lable="Username"
            iconPosition="right"
            placehoder="Enter Username"
            onChangeText={() => {}}
          />
          <Input
            lable="Password"
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
            onChangeText={() => {}}
            placehoder="Enter Password"
          />
          <CustomButton
            onPress={onSubmit}
            primary
            title="Submit"
            loading={loading}
            disabled={false}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>We need a new account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkBtn}>Regisrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
