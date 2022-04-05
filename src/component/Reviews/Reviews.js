import React, { useEffect, useState } from 'react';
import Product from '../../fakeData/Product.json'

const Reviews = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            }
            )
    }, [])
    return (
        <div>
            This is reviews component
            {

            }
        </div>
    );
};

export default Reviews;