import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Lucas from '../../assets/img/lucas.jpg';
import Binara from '../../assets/img/binara.jpg';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';


const Product = props => {
    return (
        <div>
             <div className='h-96 bg-pink-900 p-6 pt-36  md:flex md:flex-col font-bold text-white md:pt-48 md:pb-80 '>
                        <span className='text-3xl sm:text-5xl'>
                                Find the Perfect <i>Freelance</i> <br/>services for your business
                        </span>
                


                            <div className='w-full block flex mt-8 bg-white rounded-3xl sm:w-1/2 p-2'>
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



            <div className="mt-8 flex flex-row">
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 px-5 py-5 m-2 rounded"
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Lucas} alt="" />
              </div>
              <div className="flex flex-col items-center mt-4 lg:mt-0 lg:ml-6">
                <div
                  className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                >
                  PhotoGraphy Tools
                </div>
                <span
                  href="#!"
                  className="block mt-1 text-md leading-tight text-gray-900"
                  >$5,350</span>
                <div className='w-40 border border-gray-300 hover:border-none bg-yellow-400 p-1 mt-2 object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white px-5 py-5 m-2 rounded hover:bg-gray-100 hover:border-gray-100"
          >
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={Binara} alt="" />
              </div>
              <div className="flex flex-col mt-4 sm:items-left items-center lg:mt-0 lg:ml-6">
                <div
                  className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                >
                  Mercedes Benz CLA
                </div>

                <span
                  href="#!"
                  className="block mt-1 text-md leading-tight text-gray-900"
                  >$45,000</span>

                  <div className='w-40 border border-gray-300 hover:border-none bg-yellow-400 p-1 mt-2 object-center rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </div>
              </div>
              
            </div>
          </div>
        </div>

            </div>


        </div>
    )
}


export default Product
