import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../../util';
import {fetchOrder} from '../../Actions/orderActions';
import { fetchProducts } from '../../Actions/productActions';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import { Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Orders(props){
    const { orders , products} = props;
    const [ formData,setFormData ] = useState({
            title:'',
            file:'',
            description:'',
            availableSizes:'',
            price:''
    })
    const { title, file, description, availableSizes, price } = formData;

    const onChange = (e) => {
       const newData = {...formData};
       newData[e.target.name] = e.target.value;
       setFormData(newData)
    }
    useEffect(() => {
        props.fetchOrder();
        props.fetchProducts();  
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    },[])

    const deleteProducts = async (id,e) => {
        await axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=> console.error('Error:',error))
        window.location.reload();     
    }
     


    const addProducts = async (e) => {
        e.preventDefault();
      
        await axios.post(`http://localhost:5000/api/products`,{
            title: formData.title,
            image: formData.file,
            description: formData.description,
            availableSizes: [formData.availableSizes],
            price: parseFloat(formData.price)
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=> console.error('Error:',error))
    }
        return (
            <Fragment>
            <div>
            {!orders ? 
            (<div>
                <div><Spinner /></div>
            </div>)
            :
            (
                <Fragment>
                    <div className=''>
                            <nav>
                                <h1>Admin</h1>
                                <a href='#!products'></a>
                                <a href='#!orders'></a>
                                <a href='#!form'></a>
                            </nav>
                            
                    </div>
                <div className='font-nexa'>
                    <Link to='/products'><div className='p-8 text-xs text-indigo-500'>
                        Back...
                    </div></Link>
                <div className='my-4 text-center font-bold text-xl sm:text-3xl'>
                    Orders
                </div>
                <div className='p-8'>
                    <table className='w-full table-auto border border-gray-200'>
                        <thead>
                            <tr>
                                <th className='border-r-2'>ID</th>
                                <th className='border-r-2'>DATE</th>
                                <th  className='border-r-2'>TOTAL</th>
                                <th  className='border-r-2'>NAME</th>
                                <th className='border-r-2'>EMAIL</th>
                                <th className='border-r-2'>ADDRESS</th>
                                <th className='border-r-2'>ITEMS</th>
                            </tr>
                        </thead>
                        <tbody className='border border-gray-200 text-sm'>
                            {orders.map((order) =>(
                                 <tr key={order._id} className='text-center  border-b'>
                                 <td className='border-r-2'>{order._id}</td>
                                 <td className='border-r-2'><Moment format='YYYY/MM/DD'>{order.createdAt}</Moment></td>
                                 <td className='border-r-2'>{formatCurrency(order.total)}</td>
                                 <td className='border-r-2'>{order.name}</td>
                                 <td  className='border-r-2'>{order.email}</td>
                                 <td className='border-r-2'>{order.address}</td>
                                 <td className='border-r-2'>{order.cartItems.map((item)=>(
                                     <div key={item._id}>
                                         {item.count } {' * '} {item.title}
                                     </div>
                                 ))}</td>
                             </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
        </Fragment>
            )}
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


                  <div className='w-full my-8 p-2'>
                    <form className='sm:w-1/2 w-full ml-auto  text-gray-700 mr-auto font-nexa border border-gray-200 p-8' onSubmit={(e)=>addProducts(e)}>
                        <div className='font-bold text-center py-2'>
                            Add Products
                        </div>
                        <div>
                            <label>Title:</label><br></br>
                            <input type='text' name="title" value={title}  className='border w-full focus:outline-none py-1 rounded' onChange={(e)=>onChange(e)} required/>
                        </div>
                        <div className='my-4'>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                          >
                            <span className='focus:outline-none'>Upload a file</span>
                            <input id="file-upload" name="file" value={file} type="file" className="sr-only  focus:outline-none"  onChange={(e)=>onChange(e)} required/>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                        <div>
                            <label>Description:</label><br></br>
                            <input type='text' className='border w-full focus:outline-none py-1 rounded' name="description" value={description}  onChange={(e)=>onChange(e)} required/>
                        </div>
                        <div>
                            <label>Available Sizes:</label><br></br>
                            <input type='text'  className='border w-full focus:outline-none py-1 rounded'  name="availableSizes" value={availableSizes} onChange={(e)=>onChange(e)} required/>
                            <small>Seperate sizes with a comma</small>
                        </div>
                        <div>
                            <label>Price:</label><br></br>
                            <input type='text' className='border w-full focus:outline-none py-1 rounded' name="price" value={price}  onChange={(e)=>onChange(e)} required/>
                        </div>
                        <div className='mt-8'>
                                <input type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none bg-indigo-500 hover:bg-indigo-800'/>
                        </div>
                    </form>
                    
                
                 </div>      
            </div>
            </Fragment>
        );
             
    }

export default connect((state)=>({
    orders:state.order.orders,
    products:state.products.items

}),
{
    fetchOrder,
    fetchProducts
})(Orders);