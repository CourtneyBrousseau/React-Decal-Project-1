import React from "react";
import "./styles/cart.css";

import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cartItems : [] };
    }

    handleAddToCart(productName, price) {
        let cartItems = this.state.cartItems;
        cartItems = [...this.state.cartItems];
        let foundInItems = false;

        cartItems.forEach(item => {
            if (item.productName === productName) {
                item.count = item.count + 1;
                foundInItems = true;
            }
        });
        
        if (foundInItems === false) {
            cartItems = [...cartItems, {productName : productName, price : price, count : 1}];
        }

        this.setState({ cartItems : cartItems });
    }

    handleRemoveFromCart(productName) {
        let cartItems = this.state.cartItems;
        cartItems = [...this.state.cartItems];

        cartItems.forEach(item => {
            if (item.productName === productName) {
                item.count = item.count - 1;
            }
            if (item.count === 0) {
                cartItems = cartItems.filter(item => item.productName !== productName);
            }
        });

        this.setState({ cartItems : cartItems });
    }

    render() {
        return (
            <div className="page-content">
                <h2>
                	<div class="ui cards">
                		{ProductData.products.map(product => (
        			    	<Product productName={product.name} price={product.cost} onAddToCart={(productName, price) => this.handleAddToCart(productName, price)} onRemoveFromCart={(productName) => this.handleRemoveFromCart(productName)} />
        			    ))}
        			</div>
        		</h2>
                <Receipt items={this.state.cartItems} />
            </div>
        );
    }

}

export default Cart;
