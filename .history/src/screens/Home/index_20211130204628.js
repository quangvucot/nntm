import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef, useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import HomeComponent from "../../components/HomeComponent/Index";
import getFarm from "../../context/actions/farm/getFarm";

const Home = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const {
    farmDispatch,
    farmState: {
      getFarm: { data },
    },
  } = useContext(GlobalContext);
  console.log("Just Check", data.data[1]);
  useEffect(() => {
    getFarm()(farmDispatch);
  }, []);

  return (
    <HomeComponent
      // modalVisible={modalVisible}
      // setModalVisible={setModalVisible}

      data={data}
    />
  );
};
export default Home;
