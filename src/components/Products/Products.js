import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lucas from '../../assets/img/lucas.jpg';
import Binara from '../../assets/img/binara.jpg';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import Footer from '../layout/Footer';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Product = () => {
    
    
    return (
        <div>
             <div className='h-96 bg-pink-900 p-6 pt-36  md:flex md:flex-col font-bold text-white md:pt-48 md:pb-80 '>
                        <span className='text-3xl sm:text-5xl'>
                                Find the Perfect <i>Freelance</i> <br/>services for your business
                        </span>
                


                            <div className='w-full flex mt-8 bg-white rounded-3xl sm:w-1/2 p-2'>
                                <input type='search' name='search' placeholder='Search' className='flex-auto focus:outline-none text-black px-2'/>
                                <button className='bg-gray-400 hover:bg-green-400 p-1 rounded-2xl focus:outline-none'><SearchIcon style={{color:'white'}} /></button>
                                {/* <button className='bg-red-500 focus:outline-none p-0'>Search</button> */}
                            </div>
        
            </div>


            <div className='w-full p-4 mt-8'>
                        <div className='text-xl sm:text-3xl text-center font-bold text-gray-900
                        '>
                            Our Products
                        </div>

             {/* <div className='w-full flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-around'>
                {itemList}
            </div> */}

 
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

            </div>
            

            <div>
                <Footer />
            </div>

        </div>
    )
}

        

export default Product;
