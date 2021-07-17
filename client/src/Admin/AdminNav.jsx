import React from 'react';
import {Link} from 'react-router-dom';


const AdminNav = () => {
    return (
        <div>
             <nav className='w-full border-b border-gray-300 p-2 text-gray-600 hover:text-gray-900 '>
                <ul className='font-nexa w-full flex flex-row'>
                <Link to='/adminproducts'><li className='p-2'>Products</li></Link>
                <Link to='/adminorders'><li className='p-2'>Orders</li></Link>
                <Link to='/admin-form'><li className='p-2'> Add Products</li></Link>
                    <Link to='/admin' className='ml-auto'><li className='ml-auto font-bold p-2'>Admin</li></Link>   
                </ul>
            </nav>
        </div>
    )
}

export default AdminNav
