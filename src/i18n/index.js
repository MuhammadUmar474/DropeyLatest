import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useState, useEffect } from "react";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const [lang, setLang] = useState('');
const resources = {
    en: {
        translation: {
            "Your Name": "Your Name",
            "John_Doe": "John Doe",
            "Email": "Email",
            "EmailEx": "JohnDoe@gmail.com",
            "Get Started": "Get Started",
            "Or": "Or",
            "Google": "Google",
            "FaceBook": "Facebook",
            "Have Account": "Already Have an Account?",
            "Log In": "Log In",
            "Please enter your name !": "Please enter your name !",
            "Please enter your email !": "Please enter your email !",
            "Please enter valid email !": "Please enter valid email !",
            "Please enter password !": "Please enter password !",
            "No Account": "Don't Have an Account?",
            "Sign Up Now": "Sign Up Now",
            "Password": "Password",
            "Reset Password": "Reset Password",
            "Forgot password?": "Forgot password?",
        }
    },
    ar: {
        translation: {
            "Your Name": "اسمك",
            "John_Doe": "فلان الفلاني",
            "Email": "بريد الالكتروني",
            "EmailEx": "JohnDoe@gmail.com",
            "Get Started": "البدء",
            "Or": "أو",
            "Google": "متصفح الجوجل",
            "FaceBook": "فيس بوك",
            "Have Account": "هل لديك حساب؟",
            "Log In": "تسجيل الدخول",
            "Please enter your name !": "يرجى إدخال اسمك !",
            "Please enter your email !": "رجاءا أدخل بريدك الإلكتروني !",
            "Please enter valid email !": "الرجاء إدخال بريد إلكتروني صحيح !",
            "Please enter password !": "الرجاء إدخال كلمة المرور!",
            "No Account": "ليس لديك حساب؟",
            "Sign Up Now": "أفتح حساب الأن",
            "Password": "كلمه السر",
            "Reset Password": "إعادة تعيين كلمة المرور",
            "Forgot password?": "هل نسيت كلمة السر؟",

        }
    },
    tr: {
        translation: {
            "Your Name": "Adınız",
            "John_Doe": "Uncle John Doe",
            "Email": "E-posta",
            "EmailEx": "JohnDoe@gmail.com",
            "Get Started": "Başlamak",
            "Or": "Veya",
            "Google": "Google",
            "FaceBook": "Google",
            "Have Account": "Zaten hesabınız var mı?",
            "Log In": "Giriş yapmak",
            "Please enter your name !": "Lütfen adınızı giriniz !",
            "Please enter your email !": "Lütfen E-postanızı girin !",
            "Please enter valid email !": "Lütfen geçerli bir e-posta girin!",
            "Please enter password !": "Lütfen şifre giriniz !",
            "No Account": "Hesabın Yok?",
            "Sign Up Now": "Şimdi üye Ol",
            "Password": "Parola",
            "Reset Password": "Şifreyi yenile",
            "Forgot password?": "Parolanızı mı unuttunuz?",
        }
    }
};

// useEffect(() => {
//     async function getValue (){
//         setLang (await getData())
//     } 
//     getValue()
// }, [])
// const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('key')
//     //   console.log(value);
//     if(value != null){
//         console.log("Getting Asyn", value);
//         return value;
//     }
//     return "Noting"
//     } catch(e) {
//       console.log("e", e);
//       return "error"
//     }
//   }
// console.log("This Console", async () => await getData());

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: I18nManager.isRTL ? 'ar' : 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;