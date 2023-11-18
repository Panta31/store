import { signInLoginGoogle } from "../../configs/firebase";
import { signOutAccounts } from "../../configs/firebase";
import { SignInLoginFacebook } from "../../configs/firebase";

function startLoading(){
    return{
        type:'START-LOADING'
    }
}
function updateUserData(payload){
    return{
        type:'UPDATE_USER_DATA',
        payload
    }
}
function updateError(payload){
    return{
        type:'ERROR',
        payload
    }

}

function loginUserGoogle(){
    return (dispatch)=>{
        dispatch(startLoading());

            signInLoginGoogle().then((response)=>{
                const payload=response.user;
                dispatch(updateUserData(payload));
            }).catch((error)=>{
                dispatch(updateError(error))
            })
        
    }
}
function loginUserFacebook(){
    return (dispatch)=>{
        dispatch(startLoading());

            SignInLoginFacebook().then((response)=>{
                console.log(response)
                const payload=response.user;
                dispatch(updateUserData(payload));
            }).catch((error)=>{
                dispatch(updateError(error))
            })
        
    }
}
function logOutUser(){
    return (dispatch)=>{
        dispatch(startLoading());

        signOutAccounts().then(()=>{
            
            dispatch(updateUserData(null));
        }).catch((error)=>{
            dispatch(updateError(error))
        })
    }

}
export{ startLoading, updateError, updateUserData, loginUserGoogle, loginUserFacebook, logOutUser }