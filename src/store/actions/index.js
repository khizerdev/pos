function addToCart(item) {
  
    return {
      type: 'ADD_TO_CART',
      payload: {...item , quantity:1}
    }
  }
  

  
  export {
    addToCart,

  }