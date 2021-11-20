import React from 'react';

const Product = (props) => {
    const id = props.match.params.id
    return (
        <div>
            {console.log(props)}
            <h3>product - {id}</h3>
        </div>
    );
};

export default Product;