import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import  productReducers from "./Reducers/productReducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(combineReducers({
    products: productReducers,
}),
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)
     ));

     
export default store; 