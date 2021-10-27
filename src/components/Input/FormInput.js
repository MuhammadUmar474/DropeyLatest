import React from 'react';
import { TextInput } from 'react-native-paper';
import styles from './styles';

const FormInput = (props) => {
  return (
    <TextInput
        mode = {'outlined'}
        placeholder = {props?.placeholder}
        label = {props?.label}
        style={styles.textInputStyle}
        value={props?.value}
        onChangeText={props?.onchange}
        keyboardType={props?.keyboardType}
        theme={{ colors: { primary: '#7054D5'}}}
    />
  );
};

export default FormInput;