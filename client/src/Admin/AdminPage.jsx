import React from 'react'
import Orders from '../components/Products/Orders'
 
export const AdminPage = () => {
    return (
        <div>

            <nav className='w-full border-b border-gray-300 p-2 text-gray-600 hover:text-gray-900 '>
                <ul className='font-nexa w-full flex flex-row'>
                    <li className='p-2'><a>Products</a></li>
                    <li className='p-2'><a>Orders</a></li>
                    <li className='p-2'><a>Add Products</a></li>
                    <li className='ml-auto font-bold p-2'>Admin</li>    
                </ul>
            </nav>
            

            <div className='w-full mt-16 flex'>
                <h1 className=' ml-auto mr-auto font-nexa-thick text-gray-600 text-3xl font-bold'>Welcome, Admin</h1>
             </div>


            <div className='w-full flex flex-row mt-8 p-8'>
           
            <div className='flex-1 h-76 bg-gray-100 border border-gray-200 rounded-lg px-8 py-4 text-gray-600'>
                <span>
                    Number of Products
                </span>

                <h1 className='text-3xl'>6</h1>
            </div>


            <div className='w-1/4 flex flex-col justify-between'>
                 <a className='jump bg-gradient-to-r from-blue-500 to-blue-300'><p className='jump-content font-muli'>Check Products</p></a>
                 <a className='jump bg-gradient-to-r from-red-500 to-red-300 my-2'><p className='jump-content font-muli'>Check Orders</p></a>
                 <a className='jump bg-gradient-to-r from-green-500 to-green-300 my-2'><p className='jump-content font-muli'>Add Products</p></a>
             </div>

            </div>
             
                         {/* <Orders /> */}
        </div>
    )
}
