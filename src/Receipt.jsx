import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
    	<div className="receipt-item" key={item.productName}>
			<div className="receipt-text">
				{item.productName} x {item.count}
			</div>
	  		<div className="receipt-text">
				${item.price}
			</div>
		</div>
	);
  }

  calculateTotalCost() {
  	let totalCost = 0;
  	this.props.items.forEach(item => {
        totalCost += item.price * item.count;
    });
    return totalCost.toFixed(2);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calculateTotalCost()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;