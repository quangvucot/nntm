import { useRoute } from "@react-navigation/core";
import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import DeviceComponent from "../../components/DeviceComponent";
import getDevice from "../../context/actions/device/getDevice";
import { GlobalContext } from "../../context/Provider";
const Device = () => {
  const { params: { item = {} } = {} } = useRoute();
  console.log("item", item.farmID);
  const farmID = item.farmID;
  const {
    deviceDispatch,
    deviceState: {
      getDevice: { data },
    },
  } = useContext(GlobalContext);
  console.log("tao check ne: ", data);
  useEffect(() => {
    getDevice()({ item })(deviceDispatch);
  }, []);
  return <DeviceComponent data={data} />;
};
export default Device;
