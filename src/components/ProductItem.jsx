import React, { useState }from 'react'
import {  connect } from 'react-redux';
import { addToCart } from '../redux/cart/CartAction';
import { favoriteCategory } from '../redux/favorite/FavouriteActions';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { ReactComponent as Logo} from "../assets/icons/favorite-svgrepoheart-com.svg";
import Product from "./ProductPage/ProductPage.module.css";

function ProductItem(props) {
  //addToCart nu este functia din redux ci este key-ul ce va fi adaugat ca si props
    const {id, name, price, currency, image, addToCartInjected,favoriteGroup, status} =props;
    const selector=status.filter((produs)=>produs.id===id);
    const styley={...selector[0]};

  return (

    <div className='col-12 col-md-3 itemContainer'>
      <Link className="prodLink" to={`/Product/${id}`}>

        <div  className={Product.ProductItem}>

            <img className='article'
                src={image} 
                width="180rem"
                height="220rem"

            />
            
            <p>{name}</p>
            <p className='priceOfArticle'> {price} {currency}</p>
        </div>
      </Link>
      <div className={Product.ProductItem}>

          <button 
            className="btn btn-outline-dark" 
            // className={Product.ProductItem}
            onClick={()=>addToCartInjected({
              product:{
                id,
                name,
                price,
                currency,
                image

              }
            })}
          >
            Adaugă în coș
          </button>

          <button 
            
                  className='btn'
                  onClick={()=>{favoriteGroup({
                    
                      id,
                      name,
                      price,
                      currency,
                      image
                  })
            
                }
                }
                >
                <Logo style={styley?{fill:styley.back}:null}/>
          </button>
      </div>

    </div>
  )
}
function mapDispatchToProps(dispatch){
  return{
    addToCartInjected:(payload)=>{
        dispatch(addToCart(payload))
    },

    favoriteGroup:(payload)=>{
        dispatch(favoriteCategory(payload))
  }
}}
function mapStateToProps(state){
  return{

    status:state.favorite.products

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductItem)