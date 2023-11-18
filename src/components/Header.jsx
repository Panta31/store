import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../assets/imag/sphere-stone-2544690_640 copy.png'; 
import { ReactComponent as Fav} from '../assets/icons/favorite-svgrepo-com.svg'
import './Components.css';
import { ReactComponent as Cart } from '../assets/icons/shopping_cart_black_24dp.svg';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/users/UserActions';
 
function Header(props) {
  const{ numberOfProductsFromCart, userData, signOut}=props;
  console.log(userData)

  return (

              <div className="header d-flex justify-content-between align-items-center ">
                    <Link to="/">
                        <img 
                             src={logo}
                         />
                    </Link>

                    <div className='iconArea'>
                          {
                            userData?
                            <p className='nameLog'>Salut, {userData.displayName}!</p>
                            :null
                          }
                          {
                            userData?
                              <p className='logOut'
                                
                                onClick={()=>{
                                  signOut()
                                }}> Logout
                              
                              </p>
                              
                              : <Link className='logBtn' to="/login">Login</Link>
                          }
                         <div>
                            <Link className='cart' to='/Cart'>
                                <Cart className='cartLogo'/>
                                <span className={numberOfProductsFromCart?null:'numberProduct'} >{numberOfProductsFromCart}</span>
                            </Link>
                         </div>
                         
                            <Link to='/Favourite'>
                                <Fav className="favLogo"/>
                            </Link>
                            
                    </div>

              </div>  

          )
    }

function mapStateToProps(state){
  return{
     numberOfProductsFromCart : state.cart.products.length,
     userData:state.user.data
  }
}
function mapDispatchToProps(dispatch){
  return{
    signOut:()=>
      dispatch(logOutUser())
    
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Header)