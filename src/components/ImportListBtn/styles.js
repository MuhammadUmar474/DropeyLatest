import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttonView: {
    height: hp('4%'), 
    width: wp('35%'), 
    backgroundColor: '#61C064',
    justifyContent: 'center',
    alignItems: 'center' ,
    borderRadius: 30, 
},
btnTxt: { 
    color: '#fff',  
    fontSize: 8,
    fontFamily: 'Montserrat-SemiBold'
},

});

export default styles;