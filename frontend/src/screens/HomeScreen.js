import React from 'react'
import productsData from '../productsData'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <h3>Latest Products</h3>
            <Row>
                    {
                        productsData.map(product => (
                            <Col sm="12" md="6" lg="4" xl="3" key={product._id}>
                                <Product  {...product} />
                             </Col>
                        ))
                    }
            </Row>

        </>
    )
}

export default HomeScreen
