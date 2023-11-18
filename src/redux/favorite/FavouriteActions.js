function favoriteCategory(payload) {
    return {
      type:'ADD_TO_FAV',
      payload: payload
    }
  }
  function removeFavorite(payload){
      return{
        type:'REMOVE_FAVS',
        payload
      }

  }
export {favoriteCategory, removeFavorite};