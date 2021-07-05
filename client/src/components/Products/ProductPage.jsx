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
          <RegNav />
            <div className='mt-8'>
              <Filter />
            </div>
            <div className='w-screen mt-16'>
              <div className='w-5/6 ml-auto mr-auto'>
               <Products />            
              </div>
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
