import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
const CustomTouchableOpacy = ({
    onPress,
    title,
    danger,
    secondary,
    yellow,
    disabled,
    style,
    ...props
}) => {

    const getBGColor = () => {
        if (disabled) {
            return colors.gray;
        }
        if (yellow) {
            return colors.yellow;
        }
        if (danger) {
            return colors.red;
        }
        if (secondary) {
            return colors.secondary;
        }
    };
    return (
        <TouchableOpacity onPress={onPress} style={[styles.wrapper, { backgroundColor: getBGColor() }, style]}>
            <View >
                <Text style={styles.content}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomTouchableOpacy;
