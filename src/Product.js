import React from "react";
import Cart from "./Cart";

class Product extends React.Component {

	render() {
		return (
	        <div class="card">
	        	<div class="content">
	        		<div class="header">{this.props.productName}</div>
	        		<div class="description">
	        		Price: ${this.props.price}
		      		</div>
		    	</div>
		    	<div class="ui bottom attached button">
		      		<i class="add icon"></i>
		      		Add to Cart
		    	</div>
		  	</div>
		);
	}

}

export default Product;