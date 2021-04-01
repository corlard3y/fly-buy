import React from 'react';

class Filter extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className='filter flex flex-row justify-between px-8'>
            <div className='filter-result font-bold text-xl'>
                {this.props.count} Products
            </div>
            <div className='filter-sort'>
                Order   <select value={this.props.sort} onChange={this.props.sortProducts} className='border border-gray-300 p-1 rounded-lg focus:outline-none'>
                    <option>Latest</option>
                    <option value='Lowest'>Lowest</option>
                    <option value='Highest'>Highest</option>
                </select>
            </div>
            <div className='filter-size'>
                Filter   <select value={this.props.size} onChange={this.props.filterProducts} className='border border-gray-300 p-1 rounded-lg focus:outline-none'>
                    <option value="">ALL</option>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
            </select>
            </div>

        </div>;
    }
}

export default Filter;