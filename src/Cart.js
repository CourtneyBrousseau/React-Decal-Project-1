import React from "react";
import "./styles/cart.css";

import Product from "./Product";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <h2>
            	<div class="ui cards">
	            	<Product productName={"Apple"} price={2} limit={4} />
					<Product productName={"Banana"} price={1} limit={0} />
					<Product productName={"Cherry"} price={3} limit={4} />
					<Product productName={"Durian"} price={4} limit={4} />
				</div>
    		</h2>
        </div>
    );
  }

}

export default Cart;
