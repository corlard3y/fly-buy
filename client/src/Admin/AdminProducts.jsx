import React,{useEffect} from 'react';
import {fetchProducts} from '../Actions/productActions';
import {connect} from 'react-redux';
import formatCurrency from '../util';
import axios from 'axios';

// import Orders from '../components/Products/Orders'
 
const AdminProducts = (props) => {
    const {products} = props;

    const deleteProducts = async (id,e) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=> console.error('Error:',error))
        window.location.reload();     
    }

    useEffect(() => {
        props.fetchProducts();
         // eslint-disable-next-line react-hooks/exhaustive-deps   
        //eslint-disable-next-line
    }, [])
    return (
        <div>

            <nav className='w-full border-b border-gray-300 p-2 text-gray-600 hover:text-gray-900 '>
                <ul className='font-nexa w-full flex flex-row'>
                    <li className='p-2'><a href='#!'>Products</a></li>
                    <li className='p-2'><a href='#!'>Orders</a></li>
                    <li className='p-2'><a href='#!'> Add Products</a></li>
                    <li className='ml-auto font-bold p-2'>Admin</li>    
                </ul>
            </nav>


            {!products  ? (<div></div>) :
                 (  <div className='font-nexa'>
                      <div className='my-4 text-center font-bold text-xl sm:text-3xl'>
                         Products
                      </div>
                      <div className='p-8'>
                    <table className='w-full table-auto border border-gray-200 p-4'>
                        <thead>
                            <tr>
                                <th className='border-r-2'>ID</th>
                                <th  className='border-r-2'>TITLE</th>
                                <th  className='border-r-2'>DESCRIPTION</th>
                                <th className='border-r-2'>PRICE</th>
                                <th className='border-r-2'>AVAILABLE SIZES</th>
                                <th className='border-r-2'></th>
                            </tr>
                        </thead>
                        <tbody className='border border-gray-200 text-sm'>
                            {products.map((product) =>(
                                 <tr key={product._id} className='text-center  border-b'>
                                 <td className='border-r-2'>{product._id}</td>
                                 <td className='border-r-2'>{product.title}</td>
                                 <td className='border-r-2'>{product.description}</td>
                                 <td  className='border-r-2'>{formatCurrency(product.price)}</td>
                                 <td className='border-r-2'>{[product.availableSizes]}</td>
                                 <td className='border-r-2'>
                                     <button className='w-auto px-2 sm:px-8 py-2 mx-4 rounded-md text-xs sm:text-sm bg-red-500 text-white' onClick={(e)=>deleteProducts(product._id,e)}>Delete</button>
                                 </td>
                             </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                                 



                      </div>
    
                  )}  


             
        </div>
    )
}


export default connect((state)=>({
    products:state.products.items
}),
{
    fetchProducts
})(AdminProducts);
