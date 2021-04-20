import React,{useState,useEffect,Fragment} from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import Modal  from 'react-modal';
import  Zoom  from 'react-reveal/Zoom';
import formatCurrency from '../../util';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import {removeFromCart} from '../../Actions/cartActions';
import {createOrder,clearOrder} from '../../Actions/orderActions';
import RegNav from '../layout/RegNav';



function Cart(props) {

  const {cartItems, order} = props;
  // const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [formdata, setFormdata] = useState({
          name:'',
          email:'',
          address:''

  });

  const {name, email, address} = formdata;

  const handleInput = e => setFormdata({
    ...formdata,
      [e.target.name]: e.target.value
  });

  useEffect(() => {
    Modal.setAppElement('body');
  }, [ ]);

  const createOrder = e => {
    e.preventDefault();
    const order = {
      name:name,
      email:email,
      address:address,
      cartItems:props.cartItems,
      total:props.cartItems.reduce((a,c)=>a + c.price * c.count, 0)
    };
    props.createOrder(order);
  }


  const closeModal = () => {
    props.clearOrder();
  }

  


  return (
    <Fragment>
    <div>
      <RegNav />
      
        <div>
          {cartItems.length === 0 ? 
            <div className='mt-20 w-full text-center font-bold text-gray-500 text-xl'>Your Cart is Empty{'   '}
              <FontAwesomeIcon icon={faBan}/>
            </div>
            :
            <div className='mt-20 w-full text-center font-bold text-gray-500 text-xl'>You have {cartItems.length} Items in the Cart</div>
            }

        </div>

        {
          order && <Modal isOpen={true} onRequestClose={closeModal}>
            <Zoom>
              <button className='text-xs font-bold float-right text-red-500' onClick={closeModal}>Close</button>
              <div className='text-center text-sm'>
                <h3 className='font-bold'>Your Order has been placed.</h3>
                <h2 className='font-bold'> Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:{'  '} {order.name}</div>
                  </li>
                  <li>
                    <div>Email:{'  '}{order.email}</div>
                  </li>
                  <li>
                    <div>Address:{'  '}{order.address}</div>
                  </li>
                  <li>
                    <div>Total:{'  '}{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Name:{'  '}{order.cartItems.map(x=>(
                      <span key={x._id}>{x.count} {" x "} {x.title}</span>
                    ))}</div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        }


    
          <div className='w-full p-4'>
            <Fade right cascade>
            <ul className='w-full '>
              {cartItems.map(item => (
                <li key={item._id} className='flex flex-col xs:flex-row xs:justify-between border p-1 rounded-lg text-center my-2'>
                    <div className="lg:flex-shrink-0">
                      <img src={item.image} className='rounded-lg w-auto xs:w-24 xs:h-24 sm:w-64 sm:h-64' alt="" ></img>
                    </div>
                    <div className='flex flex-col xs:justify-between'>
                    <div>
                      {item.title}
                    </div>

                    <div>
                       {formatCurrency(item.price)} * 1{''}
                       <button onClick={()=>props.removeFromCart(item)} className='primary w-auto sm:w-40 border-none bg-transparent sm:bg-red-600 text-gray-500 hover:text-gray-700 sm:text-white sm:hover:text-white sm:hover:bg-red-800 p-1 mt-2 lg:mt-auto object-center focus:outline-none rounded-md'>Remove From Cart</button>
                    </div>
                    </div>
                    
                </li>
              ))}
            </ul>
            </Fade>


            {cartItems.length !== 0 && (
                <div className='flex flex-row justify-between my-8 px-8'>
                <div>
                  Total:{'   '}
                  {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                </div>
                <button onClick={()=>setCheck(true)} className='w-auto p-2 rounded-lg bg-yellow-200 focus:outline-none'>
                  Proceed
                </button>
              </div>

        )}

        <div className=''>
        {check && (
          <Fade right cascade>
                <div className='w-full ml-auto mr-auto xs:w-96 flex flex-col  p-2 border border-gray-200 rounded-lg'>
                  <form onSubmit={(e)=>
                    createOrder(e,formdata)} className='inline-block ml-auto mr-auto'>
                        <ul>
                          <li className='my-4'>
                            <label>Email:{'  '}</label>
                            <input name='email' type='email' className='border focus:outline-none border-gray-200 p-1 rounded-sm w-full' value={email} onChange={e=>handleInput(e)} required/>
                          </li> 
                          <li className='my-4'> 
                            <label>Name:{'  '}</label>
                            <input type='text' className='border focus:outline-none border-gray-200 p-1 rounded-sm w-full' name="name" onChange={e=>handleInput(e)} value={name} required/>
                          </li>
                          <li className='my-4'>
                            <label>Address:{'  '}</label>
                            <input name='address' type='text' className='border focus:outline-none border-gray-200 p-1 rounded-sm w-full' value={address} onChange={e=>handleInput(e)} required/>
                          </li>
                          <li>
                            <button className='w-auto p-2 rounded-lg bg-yellow-200 focus:outline-none' type='submit'>
                              Check Out
                            </button>
                          </li>
                          </ul>
                  </form>
                </div>
                </Fade>
              )} 
        </div>

        </div>

    </div>
    </Fragment>
  );
}

export default connect((state)=>({
  cartItems:state.cart.cartItems,
  order:state.order.order
}),
{removeFromCart,
createOrder,
clearOrder}
)(Cart);