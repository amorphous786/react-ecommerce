import React from 'react'
import {Form,Button,Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import {CheckoutSteps} from '../components/CheckoutSteps';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {savePaymentMethod} from '../actions/cartActions'
export const PaymentScreen = () => {
  const [paymentMethod,setPaymentMethod]=useState('PayPal')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  const {shippingAddress} = cart;

  if(!shippingAddress){
    navigate('/shipping');
  }

  const submitHandler =(e)=>{
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>
            Select Method
          </Form.Label>
            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='Paypal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e)=>setPaymentMethod(e.target.value)}
              >

              </Form.Check>
            </Col>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
      </Form>
    </FormContainer>
  )
}
