import React,{Fragment, Component} from 'react';
import  RegNav  from '../layout/RegNav';
import Footer from '../layout/Footer';
import Products from './Products';
import Filter from "./Filter";



class ProductPage extends Component {
  

  
    render(){

    return ( 
      <Fragment>
        <div>
          <RegNav 
        
          />
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
