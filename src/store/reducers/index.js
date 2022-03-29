const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
   
    loading:false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_TO_CART": return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
        };
        // case 'REMOVE_USER' : return {
        //     ...state,
        //     user:null
        // }
        default: return state
    }
}

export default reducer