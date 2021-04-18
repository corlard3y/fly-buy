import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import  {cartReducers}  from "./Reducers/cartReducers";
import  productReducers from "./Reducers/productReducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(combineReducers({
    products: productReducers,
    cart: cartReducers
}),
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)
     ));

     
export default store; 