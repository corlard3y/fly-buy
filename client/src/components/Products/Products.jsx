import React, { Component } from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '../../util';
import Fade from "react-reveal/Fade";
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {connect} from "react-redux";
import {fetchProducts} from '../../Actions/productActions';
import Spinner from '../layout/Spinner';
import {addToCart} from '../../Actions/cartActions';


class Products extends Component {
constructor(props) {
    super(props);

    this.state = {
        product: null
    };
}
    componentDidMount(){
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({product})
    }
    closeModal = () => {
        this.setState({product:null})
    }

    render() {
        const {product} = this.state;

        return <div className='font-muli'>
            <Fade bottom cascade>
                
                {!this.props.products ? 
            (<div><Spinner /></div>) :(   
            <ul className='products flex justify-center list-none flex-wrap px-4'>
                {this.props.products.map(product => (
                    <li key={product._id} className='flex-0 w-screen xs:w-1/2 p-2'>
                         <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 sm:px-4 sm:py-4 px-2 py-2 m-2 rounded"
          >
            <div className="lg:flex">
                {/* <a href={"#" + product._id}> */}
              <div className="lg:flex-shrink-0">
                <img onClick={()=>this.openModal(product)} className="rounded-lg lg:w-64 lg:h-64" src={product.image} alt='' />
              </div>
              {/* </a> */}
              <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-4">
                <div
                  className="uppercase tracking-wide text-sm text-gray-800 font-bold lg:text-lg"
                >
            {product.title}
                </div>
                <div
                  className="block mt-1 lg:my-4 text-md leading-tight text-gray-900"
                  >{formatCurrency(product.price)}</div>
                  <small className='hidden lg:block lg:text-left'>
                        {product.description}
                  </small>

                <button onClick={()=>this.props.addToCart(product)} className='primary w-auto sm:w-40 border-none bg-transparent sm:bg-green-400 text-gray-500 hover:text-gray-700 sm:text-white sm:hover:text-white sm:hover:bg-green-600 p-1 mt-2 lg:mt-auto object-center focus:outline-none rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </button>
              </div>
            </div>
          </div>
                    </li>
                ))}
            </ul>)
    }
            </Fade>
            {product && <Modal isOpen={true} ariaHideApp={false} onRequestClose={this.closeModal}>
                <Zoom>
                   
                    <div className='flex flex-row justify-between sm:px-2'>
                        <div className='font-muli text-md sm:text-2xl text-center'>
                        <strong>{product.title}</strong>
                        </div>
                        <button className='text-gray-500 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg font-bold text-sm' onClick={this.closeModal}>Close</button>
                    </div>

                    <div className='mt-4 flex flex-col sm:flex-row'>
                        <img className='rounded-lg w-full h-full sm:w-64 sm:h-64' src={product.image} alt=''></img>
                        <div className='sm:p-8'>
                        <div className='font-muli border-b border-gray-200 text-gray-800 text-xs sm:text-sm sm:mb-4 sm:pb-4'>{product.description}</div>
                        <div className='font-muli text-xs sm:text-sm text-gray-800 my-2'>
                            Available Sizes: {product.availableSizes.map(x=> (
                                <span key={x._id}>{'   '}<button>{x}</button></span>
                            ))}
                        </div>
                        <div className='font-muli text-xs sm:text-sm text-gray-800 my-2'>
                            <span>Price: {formatCurrency(product.price)}</span>
                        </div>
                        
                        <div className='font-muli text-xs sm:text-sm my-2'>
                            <button onClick={()=>{this.props.addToCart(product);
                            this.closeModal();
                            }} className='primary w-auto sm:w-40 border-none bg-transparent sm:bg-green-400 text-gray-500 hover:text-gray-700 sm:text-white sm:hover:text-white sm:hover:bg-green-600 p-1 mt-2 lg:mt-auto object-center focus:outline-none rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </button>
                        </div>


                        </div>
                        
                    </div>
                </Zoom>
            </Modal> }
        </div>;
    }
}


export default connect((state)=>({products:state.products.filteredItems}),{fetchProducts,addToCart})(Products);