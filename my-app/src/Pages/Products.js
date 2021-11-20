import React from 'react';
import { Link } from 'react-router-dom';

const item = [
    {name: "product- 1", to:"/product/1"},
    {name: "product- 2", to:"/product/2"},
    {name:"product- 3", to:"/product/3"},
    {name:"product- 4", to:"/product/4"},
]

const Products = () => {
    return (
        <div>
            <h1>Product</h1>
            <ul>
            {
                item.map((item) => <li><Link key={item.name} to={item.to}>{item.name}</Link></li>)
            }
            </ul>
        </div>
    );
};

export default Products;