import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faBan, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '../../util';

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
  const [open, setOpen] = React.useState(false);

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


            {cartItems.length !== 0 && (
                <div className='flex flex-row justify-between my-8 px-8'>
                <div>
                  Total:{'   '}
                  {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))}
                </div>
                <button className='w-auto p-2 rounded-lg bg-yellow-200'>
                  Proceed
                </button>
              </div>

        )}

        </div>

      
        
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List> */}
      </Dialog>
    </div>
  );
}

export default Cart;