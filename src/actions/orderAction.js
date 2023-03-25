import axios from 'axios'
import { ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL } from '../constants/orderConstants'
import { EMPTY_CART } from '../constants/cartConstants'

export const createOrder = (order) => async (dispatch,getState)=>{
  try{
    dispatch({
      type:ORDER_CREATE_REQUEST
    })
    const {
      userLogin : {userInfo}
    } = getState()
    const config = {
      headers : {
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const {data} = await axios.post(`http://localhost:5000/api/orders`,order,config)
    dispatch({type:EMPTY_CART})
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))


  }
  catch(error){
    dispatch({
      type:ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}