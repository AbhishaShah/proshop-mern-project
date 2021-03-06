import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Badge, Button, Card, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = ({match, history}) => {
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails 


    useEffect(() => {
     dispatch(listProductDetails(match.params.id))

   },[dispatch, match.params.id])

   const addToCartHandler = () => {
       history.push(`/cart/${match.params.id}?qty=${quantity}`)
   }

    return (
        <>
            <Link className="btn btn-light my-3" to="/"> 
                 Go Back
            </Link>
         {
            loading ?
                <Loader /> : 
                 error ?
                    <Message variant="danger">{error}</Message>
                    : (  
                    <Row>
                        <Col md="5">
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col md="4">
                            <ListGroup variant="flush">
        
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                    <Badge variant="primary" pill> {product.brand} </Badge>
                                </ListGroup.Item>
        
                                <ListGroup.Item>
                                    <Rating value={product.rating} reviews={product.numReviews} />
                                </ListGroup.Item>
        
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
        
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md="3">
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col> <strong> ${product.price} </strong> </Col>
                                        </Row>
                                    </ListGroup.Item>
        
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {
                                        (product.countInStock > 0 && 
                                            <ListGroup.Item>
                                                <Row>
                                                   <Col>Quantity:</Col>
                                                   <Col>
                                                        <Form.Select 
                                                            value={quantity}
                                                            onChange={(e)=>setQuantity(e.target.value)}
                                                            >
                                                            {
                                                                [...Array(product.countInStock).keys()].map(i => (
                                                                    <option key={i+1} value={i+1}>
                                                                        {i+1}
                                                                    </option>
                                                                ))
                                                            }       
                                                        </Form.Select>
                                                   </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    }
        
                                    <ListGroup.Item className="text-center">
                                        <Button 
                                            type="button" 
                                            className="btn-block" 
                                            disabled={product.countInStock === 0}
                                            onClick={addToCartHandler}
                                            >Add to Cart</Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>                 
                    )
        }
        </>
    )
}

export default ProductScreen
