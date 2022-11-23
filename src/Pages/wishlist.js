
import React from 'react';

function Orders() {
    return (


        <div class="container py-3">
            <header>

                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-6 fw-normal">Wishlist</h1>
                </div>
            </header>

            <table class="table table-bordered " cellspacing="0" width="100%">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="w-25">
			            <img src="https://prodimage.images-bn.com/pimages/9780590353427_p0_v2_s600x595.jpg" class="img-fluid img-thumbnail" alt="Harry Potter"/>
		             </td>                        
                        <td>Harry Potter and the Sorcerer's Stone</td>
                        <td>J.K. Rowling</td>
                        <td>Paperback</td>
                        <td>$9.99</td>
                        <td>
                            <div class="form-check justify-content-center">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault"></label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            

            <div class="btn-toolbar">
                <button id="button1" class="btn btn-dark mr-2">Add Selected to Cart</button>
                <button id="button2" class="btn btn-dark mr-2">Add All to Cart</button>
            </div>

        </div>
    );
};

function imageFormatter() {
    return '<img src="/assets/logo.jpg">'
  }

export default Orders