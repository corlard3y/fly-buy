import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

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

        </div>
    )
}


export default Product
