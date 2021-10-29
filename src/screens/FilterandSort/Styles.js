import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topView: {
    height: hp('11%'),
    backgroundColor: '#7054D5'
    },
  backBtn: {
    // flex: 1,
    zIndex:1,
    marginTop: hp('6%'),
    marginLeft: wp('4%'),
  },
  sortTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    bottom: 18
  },
  backArrow: {
    height: 16,
    width: 10
  },
  languagePicker: {
    width: wp('31%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10,
    elevation: 1,
    borderRadius: 3,
    borderWidth: 0.5,
  },
  pickerSort: {
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 3,
    marginTop: hp('1%'),
    borderWidth: 0.2,
    
  },
  pickerCurrency: {
    zIndex: 1,
    width: wp('90%'),
    height: hp('7%'),
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 3,
    marginTop: hp('1%'),
    borderWidth: 0.2,
  },
  filterTxt: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#777777'
  },
  sizeTxt: {
    marginTop: hp('0.5%'),
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#777777'
  },
  openedCurrencyDropDown: {
    minHeight: 160,
  },
  openedSortDropDown: {
    minHeight: 250,
  }
});

export default styles;