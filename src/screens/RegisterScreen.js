import React from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import {Form,Button,Row,Col} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {registerUser} from '../actions/userActions'
import { useState ,useEffect} from 'react';
function RegisterScreen() {

  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('');

  const dispatch = useDispatch()

  const userSignup = useSelector(state=>state.userSignup)
  const {loading,error,userInfo}=userSignup;
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split('=')[1]:'/'
  useEffect(()=>{
    console.log('daddy is here?',userInfo)
    if ((userInfo ? userInfo.length !==0 : userInfo)){
      // console.log('dodood')
      // history.pushState(redirect)
      navigate('/')
    }

  },[navigate,userInfo,redirect]);
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('Yo Babe is ')
    dispatch(registerUser(name,email,password));
  };

  return (
    <>
    <FormContainer>
      <h1>Sign Up</h1>
      {error && <Message variant={'danger'}>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='name'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={e=>setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={e=>setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={e=>setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type='submit' variant='primary'>Sign Up</Button>
      </Form>
      <Row className={'py-3'}>
        <Col>
          Have account?
          <Link to={redirect ? `/login` : '/login'}>
            Log In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  </>
  )
}

export default RegisterScreen