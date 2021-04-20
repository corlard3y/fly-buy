import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import  {cartReducers}  from "./Reducers/cartReducers";
import orderReducers from "./Reducers/orderReducers";
import  productReducers from "./Reducers/productReducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(combineReducers({
    products: productReducers,
    cart: cartReducers,
    order:orderReducers
}),
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)
     ));

     
export default store; 