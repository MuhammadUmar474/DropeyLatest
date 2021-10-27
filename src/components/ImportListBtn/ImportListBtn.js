import React from 'react';
import { TouchableOpacity, View, Image, Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './styles';

const ImportListBtn = (props) => {
    return (
        <TouchableOpacity style={styles.buttonView} onPress = {props?.onPress}>
            <Text style={styles.btnTxt}>Add To Import List</Text>
        </TouchableOpacity>
    )
}
export default ImportListBtn;
