import * as React from 'react';
import { TouchableOpacity, Text } from "react-native";
import styles from './styles';

const ButtonComp = (props) => {

  return (
    <TouchableOpacity style={styles.buttonLogin} onPress = {props.onPress}>
      <Text style={styles.logInTxt}>{props.btnName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;