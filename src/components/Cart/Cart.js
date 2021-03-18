import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{Fragment} from 'react';
// import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';
// import Lucas from '../../assets/img/lucas.jpg';


const Cart = ({ items }) => {
   


    return (
        <Fragment>
        <div className='w-screen h-auto bg-pink-900 flex flex-col'>
            <div className='pt-16 p-2 sm:px-16 mt-auto text-4xl text-white font-bold'>
                CART{'    '}
                <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
           
        </div>
         <div className=''>
         You have added:
     </div>

     <div className='px-4 p-2'>
         {/* {addedItems} */}
           
     </div>
     </Fragment>
    )
}


export default Cart;
