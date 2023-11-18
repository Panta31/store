import { connect } from 'react-redux';
import React from 'react';
import {removeFavorite} from "../redux/favorite/FavouriteActions"
import Layout from '../components/Layout';
function FavouritePage(props) {
    const {favouriteProduct, removeFavs}=props;
    console.log(props)
  return (
        <Layout>

            <div className={favouriteProduct.length?'favouritePage':'emptyFavorite'}>
                {favouriteProduct.length?
                    favouriteProduct.map((produse)=>{
                        return(
                            <div className='favouriteArticle'>
                                <p>{produse.name}</p>
                                <img
                                    width="180rem"
                                    height="220rem"
                                    src={produse.image} />
                                <p className='favPrice'>{produse.price}{produse.currency}</p>
                                <button
                                    onClick={()=>{
                                        removeFavs(produse.id)
                                    }}
                                >
                                    x
                                </button>
                            </div>
                            
                        )
                        
                    })
                    :<p className='emptyFavorite'>Adăugați un produs la lista dumneavoastră de favorite!</p>
                   
                }
            </div>
        </Layout>
  )
}

function mapStateToProps(state){

    return {
        favouriteProduct:state.favorite.products
    }
}
function mapDispatchToProps(dispatch){
    return{
        removeFavs:(payload)=>{
            dispatch(removeFavorite(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavouritePage)