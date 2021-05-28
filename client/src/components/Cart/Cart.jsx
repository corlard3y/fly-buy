import React,{useState,Fragment} from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBan, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import  Zoom  from 'react-reveal/Zoom';
import formatCurrency from '../../util';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import {removeFromCart} from '../../Actions/cartActions';
import {createOrder,clearOrder} from '../../Actions/orderActions';
import RegNav from '../layout/RegNav';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    maxHeight:'12rem',
    margin:'auto',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius:'1rem',
    border:'1px solid gray',
  },
}));


function Cart(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    props.clearOrder();
  };


  const {cartItems, order} = props;
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

  const createOrder = e => {
    e.preventDefault();
    setOpen(true);
    const order = {
      name:name,
      email:email,
      address:address,
      cartItems:props.cartItems,
      total:props.cartItems.reduce((a,c)=>a + c.price * c.count, 0)
    };
    props.createOrder(order);
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
            <div className='mt-8 w-full text-center font-bold text-gray-500 text-xl'>You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in the Cart</div>
            }

        </div>

 
        {
          order && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{display:'flex',justifyContent:'center'}}
      >
        <Zoom>
        <div className={classes.paper}>
 
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
      <button onClick={handleClose} className='float-right font-bold bg-gray-200 px-2 rounded-md hover:bg-gray-300 text-gray-700'>close</button>
    </div>
    </Zoom>
      </Modal>}

    
          <div className='w-full p-4'>
            <Fade right cascade>
            <ul className='w-full bg-gray-50 rounded-md shadow-sm'>
              {cartItems.map(item => (
                <li key={item._id} className='flex flex-row border-b border-gray-200 p-2 sm:p-8'>
                    <div className="lg:flex-shrink-0">
                      <img src={item.image} className='rounded-lg w-20 h-20 sm:w-48 sm:h-48' alt="" ></img>
                    </div>
                    <div className='font-nexa w-full my-auto flex flex-row justify-around text-xs sm:text-md'>
                    <div>
                    {item.title}
                    </div>
                    <div>
                    {formatCurrency(item.price)} * {item.count}
                    </div>
                    <div>
                    <button onClick={()=>props.removeFromCart(item)} className='primary w-auto border-0 hover:text-red-800 bg-transparent rounded-sm text-red-500 mb-2 focus:outline-none'><span className='hidden sm:inline-block mr-2'>Remove From Cart</span><span className='text-red-500'><FontAwesomeIcon icon={faTimesCircle}/></span></button>
                    </div>
                    </div>
                    
                </li>
              ))}
                   {cartItems.length !== 0 && (
                <div className='flex flex-row justify-between py-4 px-4'>
                <div className='w-auto px-2 sm:px-8 py-3 rounded-md text-xs sm:text-sm bg-blue-400 text-white'>
                  Total:{'   '}
                  {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                </div>
                <a href='#check'>
                <button onClick={()=>setCheck(true)} className='w-auto px-2 sm:px-8 py-3 rounded-md text-xs sm:text-sm bg-green-400 text-white'>
                  Proceed
                </button></a>
              </div>

        )}

              
            </ul>
            </Fade>


           
        <div className='mt-20'>
        {check && (
          <Fade right cascade>
                <div className='w-full ml-auto mr-auto xs:w-96 flex flex-col bg-gray-50 p-2 border border-gray-200 rounded-lg'>
                  <form onSubmit={(e)=>
                    createOrder(e,formdata)
                    } className='inline-block ml-auto mr-auto' id='check'>
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