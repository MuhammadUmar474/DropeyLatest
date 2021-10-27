import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_CATEGORIES, LOGIN, PASSWORD_RESET, SIGNUP, LOGOUT, GET_ITEMS } from '../types/authTypes';

const initial_state = {
        name: '',
        email: '',
        password:'',
        items: [],
        message: '',
        itemsforProduct: [],
}

const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('TokenValue')
      console.log("Token Reveived" ,value);
    } catch(e) {
      console.log(e);
    }
}

export const signUpReducer = (state = initial_state, action) => {
    const {payload} = action;
    switch(action.type){

        case SIGNUP:
            console.log('data in SignUp reducer', payload);
            return {
                ...state,
                name: payload.user.name,
                email: payload.user.email,
                message: payload.message
            }
        default:
            return {...state}
    }
}

export const loginReducer = (state = initial_state, action) => {
    const {payload} = action;
    switch(action.type){

        case LOGIN:
            console.log('data in Login reducer', payload);
            return {
                ...state,
                email: payload.email,
                password: payload.password,
                
            }
            
            
        default:
            return {...state}
    }
}

export const getCategoriesReducer = (state = initial_state, action) => {
    const {payload} = action;
    switch(action.type){
        case GET_CATEGORIES:
            console.log('data in Categories reducer', payload);
            return {
                ...state,
                items: payload,
            }
        default:
            return {...state}
    }
}

export const passwordResetReducer = (state = initial_state, action) => {
    const {payload} = action;
    switch(action.type){
        case PASSWORD_RESET:
            console.log('ResetPassword', payload);
            return {
                ...state,
                message: payload
            }
        default:
            return {...state}
    }
}

export const logOutReducer = (state = initial_state, action) => {
    switch(action.type){
        case LOGOUT:
            AsyncStorage.removeItem('TokenValue')
            return {
                ...state,
            }
        default:
            return {...state}
    }
}

export const getItemsReducer = (state = initial_state, action) => {
    const {payload} = action;
    switch(action.type){
        case GET_ITEMS:
            console.log('data in GetItems reducer', payload);
            return {
                ...state,
                itemsforProduct: payload
            }
        default:
            return {...state}
    }
}