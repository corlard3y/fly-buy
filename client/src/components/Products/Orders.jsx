import React from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../../util';
import {fetchOrder} from '../../Actions/orderActions';
import { fetchProducts } from '../../Actions/productActions';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import { Fragment } from 'react';

class Orders extends React.Component {

    componentDidMount(){
        this.props.fetchOrder();
        this.props.fetchProducts();
    }


    render() {
        const { orders , products} = this.props;
        return (
            <Fragment>
            <div>
            {!orders ? 
            (<div>
                <span>Orders</span>
                <div><Spinner /></div>
            </div>)
            :
            (
                <div>
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
            )}
             {!products  ? (<div></div>) :
                 (  <div>
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
                             </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                                 



                      </div>
    
                  )}        
            </div>
            </Fragment>
        );
             
    }
}


export default connect((state)=>({
    orders:state.order.orders,
    products:state.products.items

}),
{
    fetchOrder,
    fetchProducts
})(Orders);