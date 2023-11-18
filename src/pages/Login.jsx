import React from 'react';
import logo from '../assets/imag/sphere-stone-2544690_640 copy.png';
import '../components/Components.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {  connect } from 'react-redux';
import { loginUserGoogle, loginUserFacebook } from '../redux/users/UserActions'; 


class Login extends React.Component {


    componentDidUpdate(prevProps)
    {
        if(this.props.userData!==prevProps.userData){
          this.props.history.push('/')
          console.log(this.props.history.push)
        }

    }
      
   
      render(){

      const {loginUserWithGoogle, loginUserWithFacebook, userData}=this.props;

            return (

                <div className='loginPage'>
                    <Link to="/">
                        <img
                            src={logo} />
                    </Link>

                    
                    <button 
                          onClick={()=>loginUserWithGoogle()}
                        > 
                            Login with Google
                    </button>
                    <button 
                          onClick={()=>loginUserWithFacebook()}
                        > 
                            Login with Facebook
                    </button>
                </div>
                
                )
    } 

}


function mapDispatchToProps(dispatch){
  return{
    loginUserWithGoogle:()=>{
      dispatch(loginUserGoogle())
    },
    loginUserWithFacebook:()=>{
      dispatch(loginUserFacebook())
    }
  }
}

function mapStateToProps(state){
  return{
    userData:state.user.data
  }
}

export default connect( mapStateToProps, mapDispatchToProps ) (Login)
