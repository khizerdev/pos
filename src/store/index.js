import { createStore } from 'redux'
import rootReducer  from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  reducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      loading:false
  },
};


const store = createStore(rootReducer,initialState,composeWithDevTools( ))

export default store