import React from 'react'
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { removefromCart } from '../../redux/cart/CartAction'; 
import Shopping from './ShoppingCart.module.css';
import Header from '../../components/Header';
import "../Home.css"


function ShoppingCart(props) {
    const {cartProducts,removy}=props;
    console.log(cartProducts);
  return (
    <div>

        
        
            {cartProducts.length>0 ?
            <Layout>
                    <div>
                        
                            <div  id='bars'>
                                <p >Produs</p>
                                <p >Preț</p>
                                <p >Cantitate</p>
                                <p >Total</p>
                            </div>
                    

                    
                        {
                            cartProducts.map((produs)=>{
                                return (  

                                    

                                                <div className="bars2">
                                                        <div className='shoppingProd'>
                                                            <p >{produs.name}</p>
                                                            <img className={Shopping.cart} src={produs.image}  />
                                                        </div> 
                                                        <p>{produs.price}</p>
                                                        <p >{produs.quantity}</p>
                                                        <p className='totalPrice'>{produs.quantity * produs.price} {produs.currency}</p>

                                                        <button
                                                            className='deletedBtn'
                                                            onClick={()=>{
                                                                removy({
                                                                    idiu:produs.id
                                                                })

                                                            }}>X
                                                            
                                                        </button>
                                                </div>

                                    
                                    
                                    )
                            })
                        }

                    </div>
            </Layout>
                :<div className='emptyCart'>
                    <Header />
                    <p > Nu aveți nici un produs în coș!</p>
                </div>
                
            
            
        }

        
    </div>
    
  )
}

function mapDispatchToProps(dispatch){

    return{
        removy:(payload)=>{
            dispatch(removefromCart(payload))
        }
    }
}

function mapStateToProp(stateFromStore){
    console.log(stateFromStore)
    return{
        cartProducts:stateFromStore.cart.products
        
    }
}

export default connect (mapStateToProp, mapDispatchToProps) (ShoppingCart)