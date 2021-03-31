import React,{Fragment, Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lucas from '../../assets/img/lucas.jpg';
import Binara from '../../assets/img/binara.jpg';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  RegNav  from '../layout/RegNav';
import Footer from '../layout/Footer';
import data from '../../data.json'; 
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from './Products';


class ProductPage extends Component {
    constructor(){
      super();
      this.state ={
          products: data.products,
          size:'',
          sort:''
      };
    }
    render(){

    return ( 
      <Fragment>
        <div>
          <RegNav />
            <div className='mt-20'>
            <Products products={this.state.products}/>
            </div>

            {/* <div className='w-full p-4 mt-12'>
 
                        <div className="mt-8 flex flex-col sm:flex-row">
        
        
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 xs:px-5 xs:py-5 px-2 py-2 m-2 rounded"
          >
            <div className="lg:flex">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Lucas} alt="" />
              </div>
              <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-4">
                <div
                  className="uppercase tracking-wide text-sm text-gray-800 font-bold lg:text-lg"
                >
                  PhotoGraphy Tools
                </div>
                <div
                  className="block mt-1 lg:my-4 text-md leading-tight text-gray-900"
                  >$5,350</div>
                  <small className='hidden lg:block lg:text-left'>
                        lorem hknm fjfnk jknf j bjkbf f ff f bfj f fj bf bjc j f bjf fn j c jc bjc bm jfnkf,n db  bbjdb kb  bn bnjgsxbbsuiygbr yht the e
                  </small>

                <div className='w-40 border-none bg-green-400 text-white hover:bg-green-600 p-1 mt-2 lg:mt-auto object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
            </div>
          </div>



          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white xs:px-5 xs:py-5 px-2 py-2 m-2 rounded hover:bg-gray-100 hover:border-gray-100"
          >
            <div className="lg:flex">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Binara} alt="" />
              </div>
              <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-4">
                <div
                  className="uppercase tracking-wide text-sm text-gray-800 font-bold lg:text-lg"
                >
                  Mercedes Benz CLA
                </div>

                <div
                  className="block mt-1 text-md leading-tight text-gray-900 lg:my-4"
                  >$45,000</div>
                    <small className='hidden lg:block lg:text-left'>
                        lorem hknm fjfnk jknf j bjkbf f ff f bfj f fj bf bjc j f bjf fn j c jc bjc bm jfnkf,n db  bbjdb kb  bn bnjgsxbbsuiygbr yht the e
                  </small>

                  <div className='w-40 border-none text-white hover:bg-green-600 bg-green-400 g p-1 mt-2 object-center lg:mt-auto rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
              
            </div>
          </div>
        
        
        </div> 

            </div> */}
            

            <div>
                <Footer />
            </div>

        </div>
        </Fragment>
    )
  }

}

        

export default ProductPage;
