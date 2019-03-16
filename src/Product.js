import React from "react";
import Cart from "./Cart";

class Product extends React.Component {

	addToCart = (counter) => {
		if (this.props.limit === 0) {
			alert("This item is out of stock!");
		}
		else if (counter < this.props.limit) {
			counter = counter + 1;
			alert("There are " + counter + " " + this.props.productName + "s in your cart!");
		}
		else {
			alert("There are too many " + this.props.productName + "s in your cart!")
		}
		return counter;
	};

	render() {
		let counter = 0;

		return (
	        <div class="card">
	        	<div class="content">
	        		<div class="header">{this.props.productName}</div>
	        		<div class="description">
	        		Price: ${this.props.price}
		      		</div>
		    	</div>
		    	<div class="ui bottom attached button" onClick={() => counter = this.addToCart(counter)}>
		      		<i class="add icon"></i>
		      		Add to Cart
		    	</div>
		  	</div>
		);
	}

}

export default Product;