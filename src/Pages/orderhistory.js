
import React from 'react';

function Orders(props, state) {
    return (

    
        <div class="container py-3">
            <header>

                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-6 fw-normal">Order History</h1>
                </div>
            </header>



            <table class="table table-bordered">
            <caption>Orders</caption>
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Fulfillment Status</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>01-01-2000</td>
                        <td>Paid</td>
                        <td>Fulfilled</td>
                        <td>$100.50</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>01-02-2000</td>
                        <td>Paid</td>
                        <td>Shipment Pending</td>
                        <td>$100.50</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
export default Orders