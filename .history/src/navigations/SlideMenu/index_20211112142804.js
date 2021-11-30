import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Icon from "../../components/Common/Icons";
const index = () => {
  const menuItems = [
    {
      name: "Setting",
      onPress: () => {},
    },
    {
      name: "Logout",
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <View />
        <View style={{ paddingHorizontal: 60 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default index;
