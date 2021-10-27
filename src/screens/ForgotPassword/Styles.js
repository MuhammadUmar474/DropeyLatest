import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    underContainer: { 
        marginTop: hp('3%'), 
        alignItems: 'center',
    },
    languageView: {
        flexDirection: 'row', 
        // alignSelf: 'center', 
        marginTop: hp('2%'),
        marginRight: wp('30%'),
        justifyContent: 'space-between',
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
    logo: {
        height: 120,
        width: 200,
        backgroundColor: 'transparent',
    },
    picker: {
        width: wp('90%'),
        height: hp('7%'),
        justifyContent: 'center',
        elevation: 1,
        borderRadius: 3,
        marginTop: hp('1%'),
        borderWidth: 0.5,
    },
    lineView: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: hp('3%'), 
        marginHorizontal: wp('5%'),
    },
    socialBtn: { 
        width: wp('40%'),
        height: hp('7%'), 
        borderRadius: 5, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        borderColor: 'black', 
        borderWidth: 0.3, 
        alignItems: 'center', 
        marginHorizontal: wp('2%'),
        borderRadius: 2.5,
        paddingHorizontal: wp('7%') 
    },
    socialcons: {
        height: 20,
        width: 20,
    },
    languageIcon: {
        marginTop: hp('1.3%'),
        height: 18,
        width: 18,
        paddingLeft: wp('1%')
    },
    arrowBack: {
        marginTop: hp('0.7%'),
        marginLeft: wp('5%'),
    },
    errMsg: {
        color: 'red',
        alignSelf: 'flex-start',
        marginHorizontal: '6%',
    },
    forgotBtn: { 
        alignSelf: 'flex-end', 
        marginHorizontal: wp('5%'),
    },
    forgotTxt: { 
        color: '#7054D5', 
        fontSize: 12,
        fontWeight: 'bold',
    },
})

export default Styles;
