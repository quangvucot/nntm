import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import DeviceCustom from "../Common/DeviceCustom";
import Icon from "../../components/Common/Icons";
import colors from "../../assets/theme/colors";

const DeviceComponent = ({ data }) => {
  console.log("check xem value nhu nao", data);
  return (
    <View>
      <View>
        <DeviceCustom
          title={"Nhiệt độ"}
          value={"Nothing"}
          icon={
            <Icon
              type="faicon5"
              size={35}
              name="temperature-high"
              color="red"
            />
          }
        />
        <DeviceCustom
          title={"Độ Ẩm "}
          value={"nothing"}
          icon={<Icon type="materialIcon" size={30} name="home" />}
        />
        <DeviceCustom
          title={"Ánh Sáng"}
          value={"nothing"}
          icon={
            <Icon type="entypoIcon" size={30} name="light-up" color="orange" />
          }
        />
        <DeviceCustom
          title={"Độ Ẩm Đất"}
          value={"nothing"}
          icon={<Icon type="materialIcon" size={30} name="home" />}
        />
        <DeviceCustom
          title={"Độ PH   "}
          value={"nothing"}
          icon={<Icon type="materialIcon" size={30} name="home" />}
        />
      </View>
    </View>
  );
};

export default DeviceComponent;
