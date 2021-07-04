import React,{useEffect} from 'react';
import {fetchProducts} from '../Actions/productActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import Orders from '../components/Products/Orders'
 
const AdminPage = (props) => {
    const {products} = props;

    useEffect(() => {
        props.fetchProducts();
         // eslint-disable-next-line react-hooks/exhaustive-deps          
    },[])
    return (
        <div>

            <nav className='w-full border-b border-gray-300 p-2 text-gray-600 hover:text-gray-900 '>
                <ul className='font-nexa w-full flex flex-row'>
                <Link to='/adminproducts'><li className='p-2'>Products</li></Link>
                    <li className='p-2'><a href='#!'>Orders</a></li>
                    <li className='p-2'><a href='#!'> Add Products</a></li>
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

                <h1 className='text-3xl'>{!products ? '' : products.length}</h1>
            </div>


            <div className='w-1/4 flex flex-col justify-between'>
                 <Link className='jump bg-gradient-to-r from-blue-500 to-blue-300' to='/adminproducts'><p className='jump-content font-muli'>Check Products</p></Link>
                 <a className='jump bg-gradient-to-r from-red-500 to-red-300 mt-4 mb-2' href='#!'><p className='jump-content font-muli'>Check Orders</p></a>
                 <a className='jump bg-gradient-to-r from-green-500 to-green-300 my-3' href='#!'><p className='jump-content font-muli'>Add Products</p></a>
             </div>

            </div>
             
                         {/* <Orders /> */}
        </div>
    )
}


export default connect((state)=>({
    products:state.products.items
}),
{
    fetchProducts
})(AdminPage);
