import React from 'react'
import ProductItem from './ProductItem';

function ProductList(props) {
    const {product}=props;
    
  return (
    <div className='container-fluid'>
        <div className='row'>

        {
            product.map((produs)=>(
                <ProductItem
                    id={produs.id}
                    name={produs.name}
                    price={produs.price}
                    currency={produs.currency}
                    image={produs.image} />
            ))
        }    
        </div>
    </div>
  )
}

export default ProductList