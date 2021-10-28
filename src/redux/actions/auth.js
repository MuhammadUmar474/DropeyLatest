import axios from 'axios';
import { GET_CATEGORIES, LOGIN, PASSWORD_RESET, SIGNUP, LOGOUT, GET_ITEMS, FILTER_ITEMS } from '../types/authTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../../navigation/RootNavigator';
import Toast from 'react-native-simple-toast';
import { Header } from 'react-native/Libraries/NewAppScreen';

  const showToast = (message, duration) => {
    Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
  };

  const storeToken = async (value) => {
    //   console.log("Storing Token",value);
    try {
      await AsyncStorage.setItem('TokenValue', value);
    } catch (e) {
      console.log(e);
    }
  }
export const signUp = (name, email) => async dispatch => {
    console.log(name, email);
    try {
        await axios.post('http://18.116.113.58/api/register',
        {
            name: name,
            email: email
        })
        .then(response => {
            console.log("Response from Backend::::::",response.data.message)
            showToast(response.data.message, 3000)
            return dispatch({
                type: SIGNUP,
                payload: response?.data,
            });
        });
        console.log('signup complete');
        RootNavigation.navigate('Login')
    } catch (error) {
        console.log(error);
        showToast("Signup Failed, Please Try another email", 2000)
        console.log('signUp failed');
    }
}

export const logIn = (email, password, successCall) => async dispatch => {
    console.log(email, password);
    try {
        await axios.post('http://18.116.113.58/api/login',
        {
            email: email,
            password: password,
        })
        .then(response => {
            console.log(response.data);
            storeToken(response.data.token);
            dispatch({
                type: LOGIN,
                payload: response?.data?.user,
            });
            successCall && successCall()
            
        });
        console.log('Login complete');
        RootNavigation.navigate('Drawer');
        showToast("Login Successful", 2000);
    } catch (error) {
        console.log(error);
        console.log('Login failed');
        showToast("Login Failed", 2000)
    }
};

export const logOut = () => {
    return dispatch => {
        console.log("logOut Action Hit")
      dispatch({
        type: LOGOUT,
      });
      RootNavigation.navigate('Login');
    };
};
export const getCategories = async dispatch => {
    try {
        await axios.get('http://18.116.113.58/api/dropshipper-categories')
        .then(response => {
            console.log('categories from api',response?.data?.categories)
            return dispatch({
                type: GET_CATEGORIES,
                payload: response?.data?.categories,
            });
        });
    } catch (error) {
        console.log(error);
        console.log('Data failed while receiving');
    }
}

export const getItems = async dispatch => {
    const value = await AsyncStorage.getItem('TokenValue')
    try {
        await axios.get('http://18.116.113.58/api/items', 
        {  
            headers: {"Authorization": `Bearer ${value}`}
        })
        .then(response => {
            console.log('Items from api action', response?.data)
            return dispatch({
                type: GET_ITEMS,
                payload: response?.data,
            });
        });
    } catch (error) {
        console.log(error);
        console.log('Items failed while receiving');
    }
}

export const filterItems = (sort) => async dispatch => {
    console.log("Sort By =>", sort);
    const value = await AsyncStorage.getItem('TokenValue')
    try {
        await axios.get('http://18.116.113.58/api/filtered-items', 
        {  
            headers: {"Authorization": `Bearer ${value}`}
        },
        {
            orderBy: sort
        })
        .then(response => {
            console.log("Filer Item Action Run");
            console.log('Filtered Items from api action', response?.data?.data)
            return dispatch({
                type: FILTER_ITEMS,
                payload: response?.data?.data,
            });
        });
    } catch (error) {
        console.log(error);
        console.log('Filtered Items failed while receiving');
    }
}

export const passwordReset = (email) => async dispatch => {
    console.log("email", email);
    try {
        await axios.post('http://18.116.113.58/api/forget-password', 
        { 
            email: email 
        }
        )
        .then(response => {
            console.log("Message =>",response?.data?.message)
            return dispatch({
                type: PASSWORD_RESET,
                payload: response?.data?.message,
            });
        });
        console.log('Password Reset');
        showToast("Password sent to your email Address", 2000)
    } catch (error) {
        console.log(error);
        console.log('Password Reset Failed');
        showToast("Please enter your correct email", 2000)
    }
}