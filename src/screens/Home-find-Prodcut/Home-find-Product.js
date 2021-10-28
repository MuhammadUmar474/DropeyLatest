import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Image, ImageBackground, TextInput, FlatList, Pressable, ActivityIndicator } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import productsdata from '../../assets/data/productsdata';
const {width} = Dimensions.get('window').width;
const {height} = Dimensions.get('window').height;
import { getItems } from '../../redux/actions/auth';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
const HomefindProduct = ({navigation}) => {
    const [data, setdata] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [searchProduct, setSearchProduct] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [pageCurrent, setpageCurrent] = useState(1)
    const dispatch = useDispatch();

    const items = useSelector((state) => state?.getItems);
    console.log("Items ==> ", items)
    const newdata = items.itemsforProduct.data
    useEffect(() => {
        setdata(newdata);
        setisLoading(true)
        dispatch(getItems(successCallback));
    },[dispatch]);

    const successCallback = () => {
        // setdata(data.concat(newdata))
        setisLoading(false)
    }
    const renderFooter = () => {
        return (
            isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size={'large'} />
            </View> : null
        )
    }

    const handleLoadMore = () => {
        setpageCurrent(pageCurrent + 1)
        setisLoading(true)
    }
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <ImageBackground
                    source={require('../../assets/images/bgimage.png')}
                    style = {{height: hp('40%')}}
                >
                <View style={styles.underContainer}>
                    <View style={styles.iconsView}>
                        <Pressable onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require('../../assets/images/iconmenu.png')}
                                style = {{height:20, width: 20}}
                            />
                        </Pressable>

                        <Pressable style={{marginRight: wp('10%')}}
                        onPress={() => {console.log("Bell Pressed")}}>
                            <Image
                                source={require('../../assets/images/iconbell.png')}
                                style = {{height:22, width: 20}}
                            />
                        </Pressable>
                    </View>

                    <View style={{marginTop: hp('2.5%')}}>
                        <Text style={styles.findProductTxt}>Find Products</Text>
                    </View>

                    <View style={styles.viewCotainers}>
                        <View style={styles.searchBarView}>
                        <Image
                            source={require('../../assets/images/searchicon.png')}
                            style = {{height:15, width: 15}}
                        />
                        <TextInput 
                        style={styles.searchProductTxt}
                        placeholder = "Search Products"
                        onChangeText={setSearchProduct}
                        value={searchProduct}
                        />
                        </View>

                        <TouchableOpacity style={styles.filterIconView} onPress={() => navigation.navigate('Filter')}>
                        <Image
                            source={require('../../assets/images/filtericon.png')}
                            style = {styles.filterIcon}
                        />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewCotainers}>
                        <View style={{flexDirection: 'row'}}>
                        <CheckBox
                            // boxType = 'circle'
                            name = "SelectAll"
                            value={isCheckAll}
                            onValueChange={(newValue) => setIsCheckAll(newValue)}
                            tintColors = {{ true: '#61C064' , false: '#FFFFFF' }}
                        />
                        <Text style={styles.selectAllTxt} >Select All</Text>
                        </View>

                        <Pressable style={styles.importBtn}
                        onPress={() => {console.log("object")}}>
                        <Image
                            source={require('../../assets/images/import.png')}
                            style = {styles.importIcon}
                        />
                            <Text style={styles.importTxt} >Import</Text>
                        </Pressable>
                    </View>
                    
                </View>
                </ImageBackground>
                <View style={{flex: 1, marginTop: hp('-12%')}}>
                    <FlatList
                        showsVerticalScrollIndicator = {false}
                        data={data}
                        numColumns = {2}
                        renderItem={({item}) => <ProductCard post = {item} isSelected={isCheckAll}/>}
                        ListFooterComponent={renderFooter}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0}
                    />

                    </View>
            </View>

        </View>
    )
}

export default connect() (HomefindProduct);
