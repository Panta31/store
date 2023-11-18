import Porduct from "./ProductPage.module.css";
import React, { Component } from 'react';
import articol from '../../utils/products.json';
import Layout from '../Layout';
import {  connect } from 'react-redux';
import { addToCart } from "../../redux/cart/CartAction";


function ProductPage(props) {
        const {addToCartInjected}=props;
        const values=Object.values(articol);
        const idul=Number(props.match.params.id);
        
       
        let yourProduct;
    
        values.forEach((value)=>{
            const findResult=value.items.find((item)=>
                item.id===idul
            )
            if(findResult!==undefined){
                yourProduct=findResult
            }
          })
          
        const{ id, price, name, currency, image}=yourProduct

    return (
    <>
    
            <Layout >
                <div className={Porduct.ProductPage} >

                
                    <div className={Porduct.ProductText}>
                        <img  
                            className={Porduct.ProductImag}
                            width="300rem" height="400rem"
                            src={yourProduct.image}  
                        />
                        <span className={Porduct.ProductSpan}>
                            <p className='brandProd'>{yourProduct.brand}</p>
                            <p className='descriptionProd'> {yourProduct.description}</p>
                            <button
                                className="btn btn-outline-dark w-50"
                                    onClick={()=>addToCartInjected({
                                        product:{
                                        id,
                                        name,
                                        price,
                                        currency,
                                        image
                        
                                        }})
                                    }>
                                    Adaugă în coș
                            </button>
                        </span>
                    </div>
                
                </div>
            </Layout>

    </>
    
    )
  }
 
  function mapDispatchToProps(dispatch){
    return{
      addToCartInjected:(payload)=>{
          dispatch(addToCart(payload))
      }}
    
        }
export default connect(null, mapDispatchToProps)(ProductPage) 