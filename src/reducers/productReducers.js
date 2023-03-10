import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state ={products:[]},action)=>{
  switch (action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading:true,products:[]}
    case PRODUCT_LIST_SUCCESS:
      console.log("I am here hereh",action.payload)
      return {loading:false,products:action.payload}
    case PRODUCT_LIST_FAIL:
      return {loading:false,error:action.payload}
    default:
      return state
  }
}

// PRODUCT DETAIL REDUCER HEHE
export const productDetailsReducer = (state ={product:{}},action)=>{
  switch (action.type){
    case PRODUCT_DETAILS_REQUEST:
      return {loading:true,...state}
    case PRODUCT_DETAILS_SUCCESS:
      return {loading:false,product:action.payload}
    case PRODUCT_DETAILS_FAIL:
      return {loading:false,error:action.payload}
    default:
      return state
  }
}