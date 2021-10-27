import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {Image, Text, View, StyleSheet, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';
import { logOut } from '../redux/actions/auth';

const DrawerContent = (props) => {
    const dispatch = useDispatch();
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ...props}
            >
            <View>
                <View style={{top: -5}}>
                    <ImageBackground 
                        source={require('../assets/images/bgimage.png')}
                        style = {{height: hp('20%'), width: wp('100%')}}
                    >
                        <View style={{flex: 1 ,flexDirection: 'row', marginHorizontal: wp('5%'), marginTop: hp('5%')}}>
                            <Image source={require('../assets/images/prodcut1.png')} style={styles.image}/>
                            <View style={styles.infoView}>
                                <Text style={styles.nameTxt}>John Doe</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{flex: 1, marginTop: hp('3%'), marginHorizontal: wp('5%')}}>
                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/FindProducts.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Find Products"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Find Products')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/push-products.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Push Products"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Push Products')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/MyProducts.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "My Products"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('My Products')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/MyOrders.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "My Orders"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('My Orders')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/push-products.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Store Settings"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Store Settings')}}
                        />
                        </View>
                    </View>

                    <View style={styles.bottomLine}/>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/HelpCenter.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Help Center"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Help Center')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/StoreList.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Store List"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Store List')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/MyProfile.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "My Profile"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('My Profile')}}
                        />
                        </View>
                    </View>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/language.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Language"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {props.navigation.navigate('Language')}}
                        />
                        </View>
                    </View>

                    <View style={styles.bottomLine}/>

                    <View style={{flex: 1 ,flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/images/logout.png')}
                            style = {{height:15, width: 15}}
                        />
                        <View style={{width: wp('100%')}}>
                        <DrawerItem
                        label= "Logout"
                        labelStyle={{ flex: 1,fontSize: 14,color: '#756D86', fontFamily: 'Montserrat-Regular', width: wp('100%')}}
                        onPress= {() => {dispatch(logOut())}}
                        />
                        </View>
                    </View>
                </View>
            </View>
            </DrawerContentScrollView>
            
        </View>
    )
}

export default connect()(DrawerContent);

const styles = StyleSheet.create({
    underContainerView: {
    },
    image: {
    borderRadius: 30, 
    height: 60, 
    width: 60, 
    borderColor: '#ffffff',
    alignSelf: 'flex-start',
    },
    infoView: {
    marginTop: hp('2.4%'),
    marginHorizontal: wp('3%')
    },
    morningTxt: {
    fontSize: 11,
    },
    nameTxt: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold'
    },
    bottomLine: { 
    marginTop: hp('3%'), 
    borderBottomColor: '#756D86', 
    borderBottomWidth: 0.19, 
    width: wp('60%'),
    alignSelf: 'center'
    },
})