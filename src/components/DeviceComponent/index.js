import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import DeviceCustom from '../Common/DeviceCustom';
import Icon from "../../components/Common/Icons";

const DeviceComponent = ({ data }) => {
    console.log("value", data);
    console.log("value", data[0]["humidity"]);
    return (
        <View>


            {data ?
                <View>
                    <DeviceCustom title={"Nhiệt độ"} value={data[0]["humidity"]} icon={<Icon type="materialIcon" size={30} name="home" />} />
                    <DeviceCustom title={"Độ Ẩm "} value={"nothing"} icon={<Icon type="materialIcon" size={30} name="home" />} />
                    <DeviceCustom title={"Ánh Sáng"} value={"nothing"} icon={<Icon type="materialIcon" size={30} name="home" />} />
                    <DeviceCustom title={"Độ Ẩm Đất"} value={"nothing"} icon={<Icon type="materialIcon" size={30} name="home" />} />
                    <DeviceCustom title={"Độ PH   "} value={"nothing"} icon={<Icon type="materialIcon" size={30} name="home" />} />
                </View>
                : <View><Text>Không có gì</Text></View>}
            <Text>sldfjkdsf</Text>
        </View>
    )
}

export default DeviceComponent;