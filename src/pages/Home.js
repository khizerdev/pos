import axios from "axios"
import {useEffect, useState} from 'react'
import { Col, Row } from "antd";
import Product from "../components/Product";
import "../resources/Product.css";

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  
    
  }, [])
  

  const getProducts = async () => {
    try {
      const response = await axios.get('/api/products/');
      setProducts(response.data)
 
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <>
       <Row gutter={20}>

        {products && products.map((item,index) => {
          return (
            <Col key={item.id} xs={24} lg={6} md={12} sm={6}>
              <Product  item={item} />
            </Col>
          );
        })}
        </Row>
    </>
  );
}

export default Home;
