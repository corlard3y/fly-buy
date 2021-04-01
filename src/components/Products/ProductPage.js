import React,{Fragment, Component} from 'react';
// import SearchIcon from '@material-ui/icons/Search';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Lucas from '../../assets/img/lucas.jpg';
// import Binara from '../../assets/img/binara.jpg';
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  RegNav  from '../layout/RegNav';
import Footer from '../layout/Footer';
import data from '../../data.json'; 
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Products from './Products';
import Filter from "./Filter";

class ProductPage extends Component {
    constructor(){
      super();
      this.state ={
          products: data.products,
          size:'',
          sort:''
      };
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
         sort: sort,
         products: this.state.products.slice().sort((a, b) => (
            sort === 'Lowest' ? 
            ((a.price > b.price) ? 1 : -1):
            sort === 'Highest' ?
            ((a.price < b.price) ? 1 : -1) :
            ((a._id > b._id) ? 1 : -1) 
            
         ))
        }));
    };
    filterProducts = (event) => {
      console.log(event.target.value);
      if (event.target.value === ""){
        this.setState({size: event.target.value, products: data.products})
      }
      else{
     this.setState({
       size: event.target.value,
       products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0),

     })}
    };
    render(){

    return ( 
      <Fragment>
        <div>
          <RegNav />
            <div className='mt-20'>
              <Filter count={this.state.products.length}
              size={this.state.size}
               sort={this.state.sort}
               filterProducts={this.filterProducts}
               sortProducts={this.sortProducts}
               />
               {/* <hr className='mx-8 my-4'></hr> */}
            <Products products={this.state.products}/>
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
