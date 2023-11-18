
function addToCart(payload) {
  return {
    type:'ADD_TO_CART',
    payload: payload
  }
}

function removefromCart(payload) {
  console.log(payload)
  return {
    type:'REMOVE_FROM_CART',
    payload: payload
  }
}
  


export { addToCart};
export { removefromCart };