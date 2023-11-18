
import {  legacy_createStore as createStore , combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/CartReducer"; 
import { userReducer } from "./users/UserReducer";
import { favoriteReducer } from "./favorite/FavouriteReducer";
import logger from "redux-logger";


const rootReducer=combineReducers({
    user:userReducer, 
    cart:cartReducer,
    favorite:favoriteReducer,
});
console.log(thunk)
const middleWares=[thunk, logger]
const store = createStore(rootReducer, applyMiddleware(...middleWares));
export default store;