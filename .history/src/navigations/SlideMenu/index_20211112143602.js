import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../components/Common/Icons";
const SlideMenu = () => {
  const menuItems = [
    {
      icon: <Icon type="materialIcon" size={21} name="settings" />,
      name: "Setting",
      onPress: () => {},
    },
    {
      icon: <Icon type="materialIcon" size={21} name="logout" />,
      name: "Logout",
    },
  ];
  return (
    <SafeAreaView>
      <View />
      <View style={{ paddingHorizontal: 60 }}>
        {menuItems.map(({ name, icon, onPress }) => (
          <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
            {icon}
            <Text style={styles.itemText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SlideMenu;
