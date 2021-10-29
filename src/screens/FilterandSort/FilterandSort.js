import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectableChips from 'react-native-chip/SelectableChips'
import ButtonComp from '../../components/Button/ButtonComp';
import { connect, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { filterItems } from '../../redux/actions/auth';

const FilterandSort = ({navigation}) => {

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const [openSort, setOpenSort] = useState(false);
    const [sort, setSort] = useState(null);
    const [sortItems, setSortItems] = useState([
        {label: 'Relevant', value: 'Relevant'},
        {label: 'newest', value: 'newest'},
        {label: 'most sold', value: 'most sold'},
        {label: 'Prices: High to Low', value: 'Prices: High to Low'},
        {label: 'Prices: Low to High', value: 'Prices: Low to High'},
        {label: 'Stock: High to Low', value: 'Stock: High to Low'},
        {label: 'Stock: Low to High', value: 'Stock: Low to High'},
    ]);

    const [openCurrency, setOpenCurrency] = useState(false);
    const [currency, setCurrency] = useState(null);
    const [currencyItem, setCurrencyItem] = useState([
        {label: 'Dollar', value: 'Dollar'},
        {label: 'Euro', value: 'Euro'},
        {label: 'Rupee', value: 'Rupee'}
    ]);
    
    const filterSubmit = () => {
        dispatch(filterItems(sort))
        navigation.navigate('HomeProduct', {SortBy: sort})
    }
    console.log("Open Sort", sort);
    return (
        <View style={styles.container}>

            <View style={styles.topView}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('HomeProduct')}>
                <Image
                    source={require('../../assets/images/arrowback.png')}
                    style={styles.backArrow}    
                />
            </TouchableOpacity>
                <Text style={styles.sortTxt}>Sort & Filter</Text>
                
            </View>

            <View style={{ alignItems: 'center', marginTop: hp('3%'), marginHorizontal: wp('5%')}}>
                <View style={openSort ? styles.openedSortDropDown : null}>
                    <DropDownPicker
                        placeholder = {'Sort By'}
                        open={openSort}
                        value={sort}
                        items={sortItems}
                        setOpen={setOpenSort}
                        setValue={setSort}
                        setItems={setSortItems}
                        style={styles.pickerSort}
                        dropDownContainerStyle={{borderWidth: 0.2}}
                        containerStyle={{ width: wp('90%')}}
                        textStyle={{ color: '#777777' }}
                    />
                </View>
                <View style={openCurrency ? styles.openedCurrencyDropDown : null}>
                    <DropDownPicker
                        placeholder = {'Currency'}
                        open={openCurrency}
                        value={currency}
                        items={currencyItem}
                        setOpen={setOpenCurrency}
                        setValue={setCurrency}
                        setItems={setCurrencyItem}
                        style={styles.pickerCurrency}
                        dropDownContainerStyle={{borderWidth: 0.2}}
                        containerStyle={{ width: wp('90%') }}
                        textStyle={{ color: '#777777' }}
                    />
                </View>
            </View>
            <View style={{ marginTop: hp('3%'), marginHorizontal: wp('5%') }}>
                <Text style={styles.filterTxt}>Filters</Text>
                <Text style={styles.sizeTxt}>Size</Text>
            </View>

            <View style={{ marginTop: hp('1%'), marginHorizontal: wp('5%') }}>
                <SelectableChips 
                    initialChips={["STD", "XS","S","M", "L", "XL", "2XL", "3XL", "4XL"]} 
                    onChangeChips={(chips) => console.log(chips)} 
                    alertRequired={false}
                    valueStyle={{color: '#2D3D52', fontSize:12, }}
                    chipStyle={{borderColor: '#E3E3E3', width:wp('27%'), borderRadius: 5, borderWidth:2}}
                    valueStyleSelected={{color: '#2D3D52',fontSize:12}}
                    chipStyleSelected={{backgroundColor: '#FFFFFF', borderColor: '#7054D5', borderWidth:2}}
                />

                <ButtonComp btnName={t('Apply')} onPress={() => {sort ? filterSubmit() : navigation.navigate('HomeProduct')}} />
            </View>

            
        </View>
    )
}

export default connect()(FilterandSort);