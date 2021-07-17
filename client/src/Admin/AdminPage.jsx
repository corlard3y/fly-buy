import React,{useEffect} from 'react';
import {fetchProducts} from '../Actions/productActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AdminNav from './AdminNav';
// import Orders from '../components/Products/Orders'
 
const AdminPage = (props) => {
    const {products} = props;

    useEffect(() => {
        props.fetchProducts();
         // eslint-disable-next-line react-hooks/exhaustive-deps          
    },[])
    return (
        <div>
            <AdminNav />

            <div className='w-full mt-16 flex'>
                <h1 className=' ml-auto mr-auto font-nexa-thick text-gray-600 text-3xl font-bold'>Welcome, Admin</h1>
             </div>


            <div className='w-full flex flex-col sm:flex-row mt-8 p-8'>
           
            <div className='w-full sm:flex-1 h-76 bg-gray-100 border border-gray-200 rounded-lg px-8 py-4 text-gray-600'>
                <span>
                    Number of Products
                </span>

                <h1 className='text-3xl'>{!products ? '' : products.length}</h1>
            </div>


            <div className='w-full mt-4 sm:mt-0 sm:w-1/4 flex flex-col justify-between'>
                 <Link className='jump bg-gradient-to-r from-blue-500 to-blue-300' to='/adminproducts'><p className='jump-content font-muli'>Check Products</p></Link>
                 <Link className='jump bg-gradient-to-r from-red-500 to-red-300 mt-4 mb-2' to='/adminorders'><p className='jump-content font-muli'>Check Orders</p></Link>
                 <Link className='jump bg-gradient-to-r from-green-500 to-green-300 my-3' to='/admin-form'><p className='jump-content font-muli'>Add Products</p></Link>
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
