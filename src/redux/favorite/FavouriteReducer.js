
const initialState={
    products:[]
}

function favoriteReducer(state=initialState, action){
    switch(action.type){

        case 'ADD_TO_FAV':
            let val=state.products.some((produs)=>produs.id===action.payload.id)
            
            if(val===false)
                {
                        return{
                            ...state,
                            products:
                            [...state.products,
                                {...action.payload,
                                 back:'red'
                                }
                            ]
                        }

                }else{

                                const nouState=state.products.filter((produse)=>
                                    produse.id!==action.payload.id
                                )
                                const updatedstate={
                                                    ...state, 
                                                    products:[
                                                                ...nouState
                                                            ]
                                                    }
                return updatedstate;
                }
            
        
        case 'REMOVE_FAVS':
            const removeFav=state.products.filter((prod)=>prod.id!==action.payload);
            return {...state, products:[...removeFav]};

        default: return state;
            
    }
}

export {favoriteReducer};