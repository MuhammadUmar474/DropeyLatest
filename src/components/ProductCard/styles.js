import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
cardContainer: {
  flex: 1,
  flexDirection: 'row',
  width: wp('40%'),
  height: hp('40%'),
  borderRadius: 5,
  backgroundColor: '#ffffff',
  elevation: 5,
  shadowColor: 'transparent',
  marginHorizontal: wp('2.6%'),
  marginVertical: hp('1%'),
  overflow: 'hidden',
  borderWidth: 2,
  borderColor: 'transparent',
},
cardContainerSelected: {
  flex: 1,
  flexDirection: 'row',
  width: wp('40%'),
  height: hp('40%'),
  borderRadius: 5,
  backgroundColor: '#ffffff',
  elevation: 5,
  shadowColor: 'transparent',
  marginHorizontal: wp('2.7%'),
  marginVertical: hp('1%'),
  overflow: 'hidden',
  borderWidth: 2,
  borderColor: '#7054D5',
},
logInTxt: { 
  color: '#fff', 
  fontWeight: 'bold', 
  fontSize: 11,
},
productImg: {
  height: hp('25%'),
  width: wp('45%'),
  // height: 167,
  // width: 167,
  borderTopRightRadius: 5,
  borderTopLeftRadius: 5,
},
productNameTxt: {
  fontFamily: 'Montserrat-Medium',
  color: '#2D3D52', 
  fontSize: 9, 
  marginTop: hp('1%'), 
  marginHorizontal: wp('2%'),
  fontWeight: '500'
},
storeNameTxt: { 
  color: '#7E4FD0', 
  fontSize: 9, 
  marginTop: hp('1%'), 
  marginHorizontal: wp('2%'),
  fontWeight: 'bold',
  paddingRight: wp('5%'),
  fontFamily: 'Montserrat-Medium',
},
countryIcon: {
  height: 12,
  width: 16,
  marginHorizontal: wp('2%'),
  marginTop: hp('0.7%')
},
diamondIcon: {
  height: 9,
  width: 11,
},
priceTxt: {
  fontSize: 10, 
  color: '#777777', 
  marginHorizontal: wp('2%'), 
  fontFamily: 'Montserrat-SemiBold',
  marginTop: hp('1%'),
},
diamondView: { 
  flexDirection: 'row',
  height: hp('3%'), 
  width: wp('17%'), 
  backgroundColor: '#EDF7FE', 
  borderRadius: 30, 
  marginRight: wp('0.2%'), 
  alignItems: 'center', 
  justifyContent: 'space-around', 
  paddingHorizontal: wp('3%'),
},
supplierTxt: { 
  fontSize: 8, 
  color: '#2D3D52', 
  fontWeight: 'bold', 
  marginLeft: wp('1.5%'),
},
premiumIcon: {
  height: hp('7%'),
  width: wp('25%'),
  marginLeft: wp('1%%')
},
fireIcon: {
  height: hp('7%'),
  width: wp('7%'),
  marginLeft: wp('7%')
},
checkboxStyle: {
  borderRadius: 50
}

});

export default styles;