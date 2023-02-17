import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../products'

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
      const {id} = useParams()
      console.log('id',id)
      const product = products.find((p)=>p._id===id)

      return (
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
                                                <ListGroup.Item>
                                                      <Button className="btn-block"
                                                              type='button'
                                                               disabled={product.countInStock===0}>
                                                                  Add To Cart
                                                               </Button>
                                                </ListGroup.Item>
                                          </ListGroup>
                                    </Card>
                              </Col>
                        </Row>
                  </>
  )
}

export default ProductScreen;