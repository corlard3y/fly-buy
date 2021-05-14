import React from 'react';
import {connect} from 'react-redux';
import {filterProducts,sortProducts} from '../../Actions/productActions'
// import Spinner from '../layout/Spinner';

class Filter extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            !this.props.filteredProducts? (<div></div>):(
                <div className='filter flex flex-row justify-between px-8'>
                <div className='font-serif filter-result font-bold text-md sm:text-xl'>
                    {this.props.filteredProducts.length} Products
                </div>
                <div className='font-serif filter-sort'>
                    Order   <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)} className='border text-xs sm:text-xl border-gray-300 p-1 rounded-lg focus:outline-none'>
                        <option value='latest'>Latest</option>
                        <option value='lowest'>Lowest</option>
                        <option value='Highest'>Highest</option>
                    </select>
                </div>
                <div className='font-serif filter-size'>
                    Filter   <select value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.products,e.target.value)} className='border border-gray-300 text-xs sm:text-xl p-1 rounded-lg focus:outline-none'>
                        <option value="">ALL</option>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                </select>
                </div>
    
            </div>   
            )
        
        )
    }
}

export default connect(state=>({size:state.products.size,sort:state.products.sort,products:state.products.items,filteredProducts:state.products.filteredItems}),
{filterProducts,sortProducts}
)(Filter);