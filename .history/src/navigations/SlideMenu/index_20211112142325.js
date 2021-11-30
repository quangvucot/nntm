import React from "react";
import { View, Text } from "react-native";

const index = () => {
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
        <View />
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

export default index;
