import { createStore,combineReducers,applyMiddleware } from "redux"//imported packages
import thunk from 'redux-thunk'//async handling k liye use hota hy?
import {composeWithDevTools} from 'redux-devtools-extension'//google chrome k saath data ko link krta hy
import { productDetailsReducer, productListReducer } from "./reducers/productReducers"
const reducer = combineReducers({
  productList:productListReducer,
  productDetails:productDetailsReducer
})//all reducer will be here (for time being we dont)
//reducer will report to store
//we have some methods through which we manage our app / states
//

const initialState = {}
const middleware = [thunk]// thunk is method which has to be passed as array to middleware that's why giving it around [] bracex
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
//redux is middleware applyMiddleware will apply the middlewares
export default store;