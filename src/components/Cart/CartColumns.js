import React from 'react';
import Product from './../Product';

export default function CartColumns() {
    return (
        <div className ="container-fluid text-center">
         <div className="row">
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">Product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">Name of Product</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">remove</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
           <p className="text-uppercase">total</p>
          </div>
          
         </div>
        </div>
    )
}
