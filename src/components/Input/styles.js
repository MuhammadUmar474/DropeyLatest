import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  
  textInputStyleFocused: {
    marginVertical: hp('0.5%'),
    backgroundColor: '#fff',
    borderColor: '#dfdf',
    width: wp('90%'),
    height: hp('7%')
  },

  textInputStyle: {
    marginVertical: hp('0.5%'),
    backgroundColor: '#fff',
    fontFamily: 'Montserrat-Medium',
    width: wp('90%'),
    height: hp('7%')
  },

});

export default styles;