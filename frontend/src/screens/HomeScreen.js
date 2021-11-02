import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
    const [productsData,setProductsData] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products");
            setProductsData(data);
        }
        fetchProducts();
    },[])

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
