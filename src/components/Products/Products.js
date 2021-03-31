import React, { Component } from 'react';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


class Products extends Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div>
            <ul className='products flex justify-center list-none flex-wrap px-4'>
                {this.props.products.map(product => (
                    <li key={product._id} className='flex-0 w-1/2 p-2'>
                         <div
            className="flex-1 text-gray-700 text-center border border-gray-300 bg-white hover:bg-gray-100 hover:border-gray-100 sm:px-4 sm:py-4 px-2 py-2 m-2 rounded"
          >
            <div className="lg:flex">
                {/* <a href={"#" + product._id}> */}
              <div className="lg:flex-shrink-0">
                <img className="rounded-lg lg:w-64 lg:h-64" src={product.image} alt='' />
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
                  >${product.price}</div>
                  <small className='hidden lg:block lg:text-left'>
                        {product.description}
                  </small>

                <button className='primary w-40 border-none bg-green-400 text-white hover:bg-green-600 p-1 mt-2 lg:mt-auto object-center focus:outline-none rounded-md'>
                  <span>Add to Cart</span>{'   '}
                  <FontAwesomeIcon icon={faShoppingCart}/>
              </button>
              </div>
            </div>
          </div>
                    </li>
                ))}
            </ul>
        </div>;
    }
}


export default Products;