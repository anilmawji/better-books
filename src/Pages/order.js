
import React from 'react';

function Orders() {
    return (

    <div class="container px-4 py-5">
    <h2 class="pb-2">Order #</h2>
    <h4 class="pb-2">Address</h4>
    <p class="fw-bold">Placed on</p>
    <p class="fw-bold">Payment Status</p>
    <p class="fw-bold">Fulfillment Status </p>

        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Harry Potter</th>
                    <td>00012301203012</td>
                    <td>15.99</td>
                    <td>1</td>
                    <td>$15.99</td>
                </tr>
                <tr>
                    <th scope="row">Harry Potter</th>
                    <td>00012301203012</td>
                    <td>15.99</td>
                    <td>1</td>
                    <td>$15.99</td>
                </tr>
            </tbody>
        </table>
        </div>
        );
    };
    export default Orders