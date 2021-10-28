import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, LogBox, I18nManager } from 'react-native';
import styles from './Styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FormInput from '../../components/Input/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { signUp, getCategories } from '../../redux/actions/auth';
import Toast from 'react-native-simple-toast';

    const showToast = (message, duration) => {
        Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
    };

    const Signup = ({ navigation }) => {
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getCategories);
        },[dispatch]);

        useEffect(() => {
            GoogleSignin.configure({
                webClientId: '447829425207-c0l8ei4gavfd3eaff1v624ve1tu50g5q.apps.googleusercontent.com',
            });
        }, [])


    async function onGoogleButtonPress() {
        try {
            // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        
        // Sign-in the user with the credential
        await auth().signInWithCredential(googleCredential);
        showToast("Signup with Google Complete", 2000)
        } catch (error) {
            console.log("Google Login Failed :", error)
            showToast("Signup with Google Failed", 2000)
        }
        
    }

    async function onFacebookButtonPress() {
        try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        
            if (result.isCancelled) {
            throw 'User cancelled the login process';
            }
        
            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
        
            if (!data) {
            throw 'Something went wrong obtaining access token';
            }
        
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        
            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
            console.log("Signup with facebook Complete")
            showToast("Signup with FaceBook Complete", 2000)
        } catch (error) {
            console.log("Signup with Facebook Failed", error)
            showToast("Signup with facebook Failed", 2000)
        }
    }

    const {items} = useSelector((state) => state?.getCategories);

    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [selectedLang, setSelectedLang] = useState("English");

    const [nameError, setNameError] = useState({ error: false, msg: '' });
    const [emailError, setEmailError] = useState({ error: false, msg: '' });

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const itemsArray = items.map(i => {
        return {key: i.id, label: i.name, value: i.name}
    })
    console.log('array of items is', itemsArray)
    // const [itemss, setItemss] = useState(itemsArray);
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();

    const isValidEmail = (value) => {
        const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return regx.test(value)
    }

    const Validation = () => {
        if (!name) {
            setNameError({ error: true, msg: t('Please enter your name !') });
            return;
        }
        if (!email) {
            setEmailError({ error: true, msg: t('Please enter your email !') });
            return;
        }
        if (!isValidEmail(email)) {
            setEmailError({ error: true, msg: t('Please enter valid email !') });
            return;
        }
        dispatch(signUp(name, email));
    }

    function swapLanguage(itemValue) {

        // console.log("Item Value" , itemValue);
        // console.log("Language" , i18n.language);
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
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.languageView}>
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

            <View style={styles.underContainer}>
                <Image
                    source={require('../../assets/images/dropey.png')}
                    style={styles.logo}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: hp('8%') }}>
                <FormInput label={t('Your Name')} placeholder={t('John_Doe')} value={name} onchange={(value) => { setName(value); setNameError({ error: false, msg: '' }) }} />
                {nameError.error && (
                    <Text style={styles.errMsg}>{nameError.msg}</Text>
                )}
                <FormInput label={t('Email')} placeholder={t('EmailEx')} value={email} onchange={(value) => { setEmail(value); setEmailError({ error: false, msg: '' }) }} />
                {emailError.error && (
                    <Text style={styles.errMsg}>{emailError.msg}</Text>
                )}
                <View>
                
                    <DropDownPicker
                        placeholder = {'Products to sell?(Optional)'}
                        open={open}
                        value={value}
                        items={itemsArray}
                        setOpen={setOpen}
                        setValue={setValue}
                        style={styles.picker}
                        containerStyle={{ width: wp('90%') }}
                        textStyle={{ color: '#777777' }}
                    />
                </View>
                <ButtonComp btnName={t('Get Started')} onPress={() => Validation()} />

                <View style={styles.lineView}>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center', color: '#777777', fontFamily: 'Montserrat-Medium' }}>{t('Or')}</Text>
                    </View>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'black' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: hp('4%'), justifyContent: 'space-around' }}>
                    <TouchableOpacity style={styles.socialBtnGoogle} onPress={() => onGoogleButtonPress().then(() => console.log('Signed up with Google!'))}>
                        <Image
                            source={require('../../assets/images/google.png')}
                            style={styles.socialcons}
                        />
                        <Text style={{ color: '#777777', fontFamily: 'Montserrat-Medium'}}>{t('Google')}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialBtnFacebook} onPress={() => onFacebookButtonPress().then(() => console.log('Signed up with Facebook!'))}>
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={styles.socialcons}
                        />
                        <Text style={{ color: '#777777', fontFamily: 'Montserrat-Medium' }}>{t('FaceBook')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('15%'), bottom: hp('6%') }}>
                    <Text style={{ marginHorizontal: wp('1%'), color: '#777777', fontFamily: 'Montserrat-SemiBold' }}>{t('Have Account')}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ marginHorizontal: wp('1%'), color: '#7054D5', fontFamily: 'Montserrat-SemiBold' }}>{t('Log In')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default connect()(Signup);
