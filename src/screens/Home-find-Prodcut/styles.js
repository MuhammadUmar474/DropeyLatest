import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const {width} = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    underContainer: {
        marginTop: hp('5%'), 
        marginHorizontal: wp('5%'),
    },
    iconsView: {
        
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: wp('100%'),
        
    },
    findProductTxt: { 
        color: '#fff', 
        fontSize: 20, 
        fontFamily: 'Montserrat-SemiBold',
        marginHorizontal: wp('1%'),
    },
    searchBarView: { 
        height: hp('6%'), 
        width: wp('77%'),
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: 5, 
        paddingHorizontal: 10,
    },
    viewCotainers: { 
        flexDirection: 'row', 
        marginTop: hp('1%'), 
        justifyContent: 'space-between'
    },
    searchProductTxt: {
        flex: 1,
        marginLeft: wp('4%'), 
        color: '#ABB3BB', 
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },
    filterIconView: {
        height: hp('6%'),
        width: wp('11%'),
        backgroundColor: '#fff', 
        alignItems: 'center', 
        borderRadius: 5, 
        paddingHorizontal: 5,
        overflow: 'hidden'
    },
    filterIcon: { 
        height:40, 
        width: 40, 
        backgroundColor: 'transparent',
    },
    selectAllTxt: { 
        fontSize: 12, 
        color: '#FFFFFF', 
        marginLeft: wp('1%'), 
        marginTop: hp('1.5%'),
        fontFamily: 'Montserrat-Medium'
    },
    importBtn: { 
        flexDirection: 'row', 
        height: hp('5%'), 
        width: wp('23%'), 
        backgroundColor: '#61C064',
        justifyContent: 'space-around',
        paddingHorizontal: wp('4%'),
        alignItems: 'center' ,
        borderRadius: 30, 
    },
    importTxt: { 
        fontSize: 11, 
        color: '#FFFFFF', 
        fontFamily: 'Montserrat-SemiBold',
    },
    importIcon: { 
        height:10, 
        width: 10, 
        backgroundColor: 'transparent',
    },
})

export default Styles;