import React from 'react';
// import { connect } from 'react-redux';

class Orders extends React.Component {


    render() {
        return (<div>
                <div>
                    Orders
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>ITEMS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>);
    }
}


export default Orders;