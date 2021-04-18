import React,{Fragment, Component} from 'react';
// import SearchIcon from '@material-ui/icons/Search';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
// import Lucas from '../../assets/img/lucas.jpg';
// import Binara from '../../assets/img/binara.jpg';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  RegNav  from '../layout/RegNav';
import Footer from '../layout/Footer';
// import data from '../../data.json'; 
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Products from './Products';
import Filter from "./Filter";
// import  Cart  from "../Cart/Cart";


class ProductPage extends Component {
    constructor(){
      super();
      this.state ={
          cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [],
        
      };
    }

    createOrder = (order) => {
      alert("Need to save order for " + order.name)
    };

    removeFromCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      this.setState({
      cartItems:cartItems.filter(x=>x._id !== product._id)
      });
      localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x._id !== product._id)))
    }
    
    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if(item._id === product._id){
              item.count++;
              alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
          cartItems.push({...product, count: 1})
        }
        this.setState({cartItems});
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    };
    render(){

    return ( 
      <Fragment>
        <div>
          <RegNav 
          cartItems={this.state.cartItems}
          removeFromCart={this.removeFromCart}
          createOrder={this.createOrder}
          />
          {/* <div className='w-full mt-16 flex justify-center border-b'>
          <div className='flex w-11/12 border h-10 rounded-sm mb-1'>
          <input
                    className="w-auto flex-1 px-4 focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                     <button type="submit" className="px-8 bg-gray-200 hover:bg-gray-500 text-gray-800  hover:text-gray-200 focus:outline-none">
                     <FontAwesomeIcon icon={faSearch} className=""/>
                     </button>
          </div>
          </div> */}
            <div className='mt-20'>
              <Filter />
            </div>
            <div>
            <Products addToCart={this.addToCart}/>            
            </div>

             

            <div>
                <Footer />
            </div>

        </div>
        </Fragment>
    )
  }

}

        

export default ProductPage;
