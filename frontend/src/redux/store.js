import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//Reducers
import { cartReducer } from './reducer/cartReducers'
import {getProductsReducer,getProductDetailsReducer} from './reducer/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductsDetails: getProductDetailsReducer,

}) 

const middleware = [thunk] 

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INITIAL_STATE = {
    cart : {
        cartItems:cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;