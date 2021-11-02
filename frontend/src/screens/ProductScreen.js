import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Badge, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({match}) => {
   const [product,setProduct] = useState({});

   useEffect(() => {
       const fetchProduct = async () => {
       const {data} = await axios.get(`/api/products/${match.params.id}`)
         setProduct(data);
       }
       fetchProduct();

   },[match.params.id])
   console.log(product);
   const {name,image,description,price,brand,countInStock,rating,numReviews} = product;
    return (
        <>
            <Link className="btn btn-light my-3" to="/"> 
                Go Back
            </Link>
            <Row>
                <Col md="5">
                    <Image src={image} alt={name} fluid/>
                </Col>
                <Col md="4">
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{name}</h3>
                            <Badge variant="primary" pill> {brand} </Badge>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={rating} reviews={numReviews} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md="3">
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col> <strong> ${price} </strong> </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item className="text-center">
                                <Button type="button" className="btn-block" disabled={countInStock === 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
           
        </>
    )
}

export default ProductScreen
