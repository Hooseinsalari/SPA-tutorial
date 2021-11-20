import React from 'react';

const Product = ({match, location}) => {
    const id = match.params.id
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);

    return (
        <div>
            {console.log(parsed)}
            <h3>product - {id}</h3>
        </div>
    );
};

export default Product;