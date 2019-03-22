import React from 'react';

const Product = (props) =>
    <div className="Product">
        <h2>{props.product.name}</h2>
        <p><i>ID: </i> {props.product.id}</p>
        <p><i>Price: </i> {props.product.price}</p>
        <p><i>Description: </i> {props.product.description}</p>
        <hr/>
    </div>;

export default Product;
