import { FETCH_PRODUCTS } from "./types";
// import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
   
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    console.log(data);

    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    })
}