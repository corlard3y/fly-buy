import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBan, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '../../util';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import {removeFromCart} from '../../Actions/cartActions'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:'white',
    boxShadow:'none',
    color:'gray',
    // borderBottom:'1px solid gray'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function Cart(props) {

  const {cartItems} = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
    const order = {
      name:name,
      email:email,
      address:address,
      cartItems:props.cartItems
    };
    props.createOrder(order);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  


  return (
    <div>
      <button variant="outlined" className='flex flex-row justify-between text-sm font-semibold bg-white sm:bg-gray-200 ml-2 text-gray-700 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline' onClick={handleClickOpen}>
                     <div className='hidden sm:block'>Cart</div>{'  '}
                        <FontAwesomeIcon icon={faShoppingCart} className='mx-1 mt-1'/>
      </button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
          <IconButton edge="start" color="inherit" className='focus:outline-none' onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            
            <Typography variant="h6" className={classes.title}>
              Cart Items
            </Typography>
          
          </Toolbar>
        </AppBar>
        <div>
          {cartItems.length === 0 ? 
            <div className='w-full text-center font-bold text-gray-500 text-xl'>Your Cart is Empty{'   '}
              <FontAwesomeIcon icon={faBan}/>
            </div>
            :
            <div className='w-full text-center font-bold text-gray-500 text-xl'>You have {cartItems.length} Items in the Cart</div>
            }

        </div>


    
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

      </Dialog>
    </div>
  );
}

export default connect((state)=>({
  cartItems:state.cart.cartItems
}),
{removeFromCart}
)(Cart);