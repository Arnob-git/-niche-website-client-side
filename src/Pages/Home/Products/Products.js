import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-springs-58803.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const sliceNum = Math.round(Math.random()*6)

    return (
        <div className='mt-3 py-3' style={{ background: '#D2B4DE' }}>
            <Container>
                <Row>
                    {
                        products.slice(sliceNum, sliceNum + 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;