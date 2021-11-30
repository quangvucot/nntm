import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./style";
import Icon from "../../components/Common/Icons";
import Container from "../../components/Common/Container";
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
      <Container>
        <Image height={70} width={70} style={styles.logo} />
        <View style={{ paddingHorizontal: 60 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SlideMenu;
