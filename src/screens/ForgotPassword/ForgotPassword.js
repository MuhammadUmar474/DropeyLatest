import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, LogBox, I18nManager } from 'react-native';
import styles from './Styles';
import { connect, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FormInput from '../../components/Input/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import {passwordReset} from '../../redux/actions/auth';

const ForgotPassword = ({ navigation, props }) => {

    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [selectedLang, setSelectedLang] = useState("English");
    const [emailError, setEmailError] = useState({ error: false, msg: '' });

    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();

    const isValidEmail = (value) => {
        const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return regx.test(value)
    }

    const Validation = () => {
        if (!email) {
            setEmailError({ error: true, msg: t('Please enter your email !') });
            return;
        }
        if (!isValidEmail(email)) {
            setEmailError({ error: true, msg: t('Please enter valid email !') });
            return;
        }
        dispatch(passwordReset(email));
    }

    function swapLanguage(itemValue) {

        if (itemValue == 'English') {
            i18n.changeLanguage('en').then(() => {
                I18nManager.forceRTL(false);
                // RNRestart.Restart();
            })
        }
        if (itemValue == 'العربية') {
            i18n.changeLanguage('ar').then(() => {
                I18nManager.forceRTL(true);
                // RNRestart.Restart();
            })
        }
        if (itemValue == 'Turkish') {
            i18n.changeLanguage('tr').then(() => {
                I18nManager.forceRTL(false);
                // RNRestart.Restart();
            })
        }

    }
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.languageView}>
                <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => navigation.navigate('Login')}>
                    <FontAwesome name ={"angle-left"} style={styles.arrowBack} size={25} />
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        source={require('../../assets/images/lang.png')}
                        style={styles.languageIcon}
                    />
                    <Picker
                        selectedValue={selectedLang}
                        onValueChange={(itemValue) => {setSelectedLang(itemValue), swapLanguage(itemValue)}}
                        style={styles.languagePicker}>

                        <Picker.Item label="English" value="English" />
                        <Picker.Item label="Turkish" value="Turkish" />
                        <Picker.Item label="العربية" value="العربية" />

                    </Picker>
                </View>
            </View>

            <View style={styles.underContainer}>
                <Image
                    source={require('../../assets/images/dropey.png')}
                    style={styles.logo}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: hp('8%') }}>
                <FormInput label={t('Email')} placeholder={t('EmailEx')} value={email} onchange={(value) => { setEmail(value); setEmailError({ error: false, msg: '' }) }} />
                {emailError.error && (
                    <Text style={styles.errMsg}>{emailError.msg}</Text>
                )}
                <ButtonComp btnName={t('Reset Password')} onPress={() => Validation()} />
            </View>
            
            <View style={{alignSelf: 'center'}}>
            <View style={{ flexDirection: 'row', marginTop: hp('45%'), bottom: hp('6%') }}>
                    <Text style={{ marginHorizontal: wp('1%'), color: '#777777', fontFamily: 'Montserrat-SemiBold' }}>{t('Have Account')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ marginHorizontal: wp('1%'), color: '#7054D5', fontFamily: 'Montserrat-SemiBold' }}>{t('Log In')}</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default connect()(ForgotPassword);
