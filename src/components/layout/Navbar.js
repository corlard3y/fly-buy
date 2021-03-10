import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faPhone,faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
  


const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
        <div>

        <nav className='flex flex-row bg-white justify-between p-3 antialiased'>
            <div className='text-lg md:text-3xl lg:text-3xl font-bold lg:px-6 text-gray-700'>
                <FontAwesomeIcon icon={faBars}
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.hide)}/>
                    <span >FlyBuy</span>
            </div>


            <div className='hidden md:block md:ml-auto md:px-2 lg:px-4'>
            
            <input
                    className="border border-gray-300 bg-white h-10 pl-2 pr-8 w-auto rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" />
                     <button type="submit" className="relative top-0 right-6">
                    <FontAwesomeIcon icon={faSearch} style={{color:'gray'}}/>
                </button>
            </div>


            <div className='hidden lg:flex lg:flex-row lg:mr-2'>
                    <div className='text-sm font-semibold bg-transparent rounded-lg text-gray-700 dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                        <a href='#!'>Blog</a>
                    </div>
                    <div className='text-sm font-semibold text-gray-700 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                        <a href='#!'>About</a>
                    </div>
                   
                    <div className='text-sm font-semibold text-gray-700 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                        <a href='#!'>Premium</a>
                    </div>
                   
            </div>
            


            <div className='flex flex-row'>
            <div className='text-sm font-semibold bg-gray-200 md:bg-transparent text-gray-700 rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline '>
                        <a href='#!'>Contact</a>{'  '}
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div className='text-sm font-semibold bg-gray-200 ml-2 md:bg-transparent text-gray-700 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 p-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>
                        <a href='#!'>Cart</a>{'  '}
                        <FontAwesomeIcon icon={faShoppingCart}/>
                    </div>
            </div>


            
        </nav>


        <Drawer
        className={classes.drawer}
        onEscapeKeyDown={handleDrawerClose}
        onBackdropClick={handleDrawerClose}
        variant="temporary"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className='bg-white py-2 px-4 hover:bg-gray-200'>
          <a href='#!'>About</a>
        </div>
        <div className='bg-white py-2 px-4 hover:bg-gray-200'>
          <a href='#!'>Premium</a>
        </div>
        <div className='bg-white py-2 px-4 hover:bg-gray-200'>
          <a href='#!'>Blog</a>
        </div>
        <div className='bg-white py-2 px-4 hover:bg-gray-200'>
          <a href='#!'>DARK MODE</a>
        </div>
      </Drawer>

        </div>
        
    )
}

export default Navbar;
