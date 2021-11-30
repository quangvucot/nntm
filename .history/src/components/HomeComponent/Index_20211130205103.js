import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  button,
  Button,
  Switch,
  FlatList,
} from "react-native";
import style from "../../navigations/SlideMenu/style";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Message from "../Common/Message";

const ListEmptyComponent = () => {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info message="No contacts to show" />
    </View>
  );
};
const Item = ({ area }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{area}</Text>
  </View>
);

const HomeComponent = ({ data, loading, setModalVisible }) => {
  console.log(data);
  const { navigate } = useNavigation();
  const renderItem = ({ item }) => {
    console.log("item", item);
    return <Item location={item.area} />;
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => String(item.farmID)}
      />
    </View>
  );
};

export default HomeComponent;
