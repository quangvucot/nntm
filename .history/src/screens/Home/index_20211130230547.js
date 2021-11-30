import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef, useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import HomeComponent from "../../components/HomeComponent/Index";
import getFarm from "../../context/actions/farm/getFarm";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home =  () => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const uuid = await AsyncStorage.getItem("uuid");
  const {
    farmDispatch,
    farmState: {
      getFarm: { data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getFarm()(farmDispatch);
  }, []);

  return (
    <HomeComponent
      // modalVisible={modalVisible}
      // setModalVisible={setModalVisible}

      data={data.data}
    />
  );
};
export default Home;
