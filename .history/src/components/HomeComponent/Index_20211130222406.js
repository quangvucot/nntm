import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  StyleSheet,
} from "react-native";
import style from "../../navigations/SlideMenu/style";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Message from "../Common/Message";
import colors from "../../assets/theme/colors";
import backgoundImage from "../../assets/theme/images/backgound_farm.jpg";
const BG =
  "https://www.wallpapertip.com/wmimgs/165-1651644_green-farm-background.jpg";
const ListEmptyComponent = () => {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info message="No contacts to show" />
    </View>
  );
};
const Item = ({ area, farmName, location, timeStart }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View style={styles.item}>
      <Text style={styles.name}>Tên: {farmName}</Text>
      <Text style={styles.location}>Địa Điểm {location}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.time}>Bắt đầu: {timeStart}</Text>
        <Text style={styles.time}>Số Ngày: {timeStart}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeComponent = ({ data, loading, setModalVisible }) => {
  const { navigate } = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <Item
        area={item.area}
        farmName={item.farmName}
        location={item.location}
        timeStart={item.timeStart}
      />
    );
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <Image source={{ uri: BG }} style={StyleSheet.absoluteFillObject} />
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => String(item.farmID)}
        contentContainerStyle={{
          padding: 10,
          paddingTop: StatusBar.currentHeight || 43,
        }}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default HomeComponent;
