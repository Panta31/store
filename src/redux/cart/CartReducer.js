import React from 'react';
// In acest folder vom scrie toti reducerii pentru a actualiza state-ul referitor la cart.

// Un reducer trebuie sa aiba o stare initiala. Similar cu o componenta de React!
const initialState={
    products:[]
}
// Reducerul este o functie care primeste de la redux ca parametru state-ul de la acel moment,
// precum si o actiune. Reducerul verifica tipul(numele) actiunii, iar daca acesta coincide tipului
// returnat de actiunea invocata din componenta, atunci va RETURNA state-ul modificat corespunzator.
// initialState este un default parameter, adica daca state-ul pentru reducer nu a fost inca initializat,
// atunci va fi initializat cu initialState.
function cartReducer(state=initialState, action) {
  
    switch (action.type) {
        case 'ADD_TO_CART':
          let productInside=false;
          //Noul state va fi actualizat folosind newState
          const doubledProduct=state.products.map(produsul=>{
              if(produsul.id===action.payload.product.id){
                  productInside=true;
                    return{
                      ...produsul, 
                      quantity:produsul.quantity+1
                    }
                  }
                    else{
                      return produsul;
                    }
                })

              if(productInside!==true){
                    return{
                              ...state,
                              products:
                              [
                                ...state.products, 
                                  {...action.payload.product,
                                    quantity:1
                                  }
                              ]
                           }
              }else{
                    return{
                              ...state, 
                              products:
                              [
                                ...doubledProduct
                              ]
                    }
                  }
                  
        case 'REMOVE_FROM_CART':
            const filter= state.products.filter((eles)=>eles.id!==action.payload.idiu);
            const updatedstate={...state, products:[...filter]}

        return updatedstate;
        
        default:
          return state;
        }
}

export {cartReducer};