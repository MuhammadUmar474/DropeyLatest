import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { filterItemsReducer, getCategoriesReducer, getItemsReducer, loginReducer, logOutReducer, passwordResetReducer, signUpReducer } from './reducers/auth';

const AllReducers = combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    getCategories: getCategoriesReducer,
    passwordReset: passwordResetReducer,
    logut: logOutReducer,
    getItems: getItemsReducer,
    filterItems: filterItemsReducer,
})

export const store = createStore(
    AllReducers,
    compose(
        applyMiddleware(thunk),
    )
);