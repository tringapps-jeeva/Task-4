import React, { Fragment } from "react";

function Card({product, quantity, price, total }, props) {
    return (
        <Fragment>
            <div className="card_container">
                <div className="card_body">
                    <div className="product_container"><h3>Product : <i>{product}</i></h3></div>
                    <div className="quantity_container"><h3>Quantity : <i>{quantity}</i></h3></div>
                    <div className="price_container"><h3>price : <i>{price}</i></h3></div>
                    <div className="total_container"><h3>Total : <i>{total}</i></h3></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card