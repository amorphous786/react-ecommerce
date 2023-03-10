import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button,Form} from 'react-bootstrap';
import Rating from '../components/Rating';
import {Message} from '../components/Message'
import {Loader} from '../components/Loader'
// import products from "../products";
// import axios from 'axios';
import {useEffect,useState} from 'react'
import {listProductDetails} from '../actions/productAction'
import { useDispatch, useSelector } from 'react-redux';


// match prop is this which is returned by Route component to the linked element
// it gives a match props automatically to the element's component's props
// now match object has 3 properties, params,path and url okay!
// NOTE THIS IMPLEMENTATION IS VALID FOR V5 VERSION NOT FOR V6
// {
//       path:'/prouduct/:id',
//       url: '/product/123',
//       params: {_id: '123'}
// }
const  ProductScreen = ()=> {
      // console.log("before error:",match)
      const {id} = useParams()//
      const navigate = useNavigate()//importing from react-router-dom

      const [qty,setQty] = useState(1)
      const dispatch = useDispatch()
      const productDetails = useSelector(state=>state.productDetails)
      const {loading,error,product}=productDetails
      // const product = products.find((p)=>p._id===id)
      // const [product,setProduct] = useState({})

      useEffect(() => {

            dispatch(listProductDetails(id))
      }, [dispatch]);

      const addToCartHandler = () => {
            navigate(`/cart/${id}?qty=${qty}`)//query parameters
      }
      return (

                  loading? (<Loader/>)
                  :
                  error? (<Message variant={'danger'} >{error}</Message>)
                  :
                  (
                  <>
                  <Link className='btn btn-light my-3' to='/'>
                  Go Back
                  </Link>
                  <Row>
                        <Col md={6}>
                              <Image src={product.image} alt={product.name}  fluid />
                        </Col>
                        <Col md={3}>
                              <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                          <h3>{product.name}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                          <Rating
                                                value={product.rating}
                                                text={`${product.numReviews} reviews`}/>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                          Price: ${product.price}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                          Description: {product.description}
                                    </ListGroup.Item>
                              </ListGroup>
                        </Col>
                        <Col md={3}>
                              <Card>
                                    <ListGroup variant='flush'>
                                          <ListGroup.Item>
                                                      <Row>
                                                            <Col>
                                                                  Price
                                                            </Col>
                                                            <Col>
                                                                  <strong>${product.price}</strong>
                                                            </Col>
                                                      </Row>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                                <Row>
                                                      <Col>Status</Col>
                                                      <Col>
                                                            {product.countInStock > 0 ? 'In Stock': 'Out Of Stock'}
                                                      </Col>
                                                </Row>
                                          </ListGroup.Item>
                                          {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                      <Row>
                                                            <Col>Qty</Col>
                                                            <Col>
                                                                  <Form.Control
                                                                        as='select'
                                                                        value={qty}
                                                                        onChange={(e)=>setQty(e.target.value)}
                                                                  >
                                                                        {[...Array(product.countInStock).keys()].map((x)=>(
                                                                              <option key={x+1} value={x+1}>
                                                                                    {x+1}
                                                                              </option>
                                                                        ))}
                                                                  </Form.Control>
                                                            </Col>
                                                      </Row>
                                                </ListGroup.Item>
                                          )}
                                          <ListGroup.Item>
                                                <Button className="btn-block"
                                                        onClick={addToCartHandler}
                                                        type='button'
                                                         disabled={product.countInStock===0}>
                                                            Add To Cart
                                                         </Button>
                                          </ListGroup.Item>
                                    </ListGroup>
                              </Card>
                        </Col>
                  </Row></>)




  )
}

export default ProductScreen;