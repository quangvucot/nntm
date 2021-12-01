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
  return (
    <View>
      <View>
        {data ? (
          <View>
            <Text>Đéo có dữ liệu gì cũng show à</Text>
          </View>
        ) : (
          <View>
            <DeviceCustom
              title={"Nhiệt độ"}
              value={data[0].temperature}
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
              value={data[0].humidity}
              icon={<Icon type="materialIcon" size={30} name="home" />}
            />
            <DeviceCustom
              title={"Ánh Sáng"}
              value={data[0].lightIntensity}
              icon={
                <Icon
                  type="entypoIcon"
                  size={30}
                  name="light-up"
                  color="orange"
                />
              }
            />
            <DeviceCustom
              title={"Độ Ẩm Đất"}
              value={data[0].soilPH}
              icon={<Icon type="materialIcon" size={30} name="home" />}
            />
            <DeviceCustom
              title={"Độ PH:     "}
              value={data[0].soilPH}
              icon={<Icon type="materialIcon" size={30} name="home" />}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default DeviceComponent;
