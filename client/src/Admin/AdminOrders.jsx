import React,{useEffect} from 'react';
import {fetchOrder} from '../Actions/orderActions';
import {connect} from 'react-redux';
import formatCurrency from '../util';
// import axios from 'axios';
import Moment from 'react-moment';
import AdminNav from './AdminNav';
import Spinner from '../components/layout/Spinner';



// import Orders from '../components/Products/Orders'
 
const AdminOrders = (props) => {
    const {orders} = props;


    useEffect(() => {
        props.fetchOrder();
         // eslint-disable-next-line react-hooks/exhaustive-deps   
        //eslint-disable-next-line
    }, [])
    return (
        <div>
            <AdminNav />

                      <div className='my-4 text-center font-bold text-xl sm:text-3xl'>
                    Orders
                </div>
                {!orders ? (<Spinner />) : 
                    (<div className='p-8'>
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
                </div>)
                                 

                }
                


        </div>
                      


             
    )
}


export default connect((state)=>({
    orders:state.order.orders
}),
{
    fetchOrder
})(AdminOrders);
