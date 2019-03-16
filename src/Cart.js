import React from "react";
import "./styles/cart.css";

import Product from "./Product";
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <h2>
            	<div class="ui cards">
            		{ProductData.products.map(product => (
				    	<Product productName={product.name} price={product.cost} limit={product.stock} />
				    ))}
				</div>
    		</h2>
        </div>
    );
  }

}

export default Cart;
