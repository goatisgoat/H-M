import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCards from "../productCard/ProductCards";
import { useSearchParams } from "react-router-dom";


const ProductAll = ( {userlogin} ) => {
  const [productAllInfo, setProductAllInfo] = useState(null);
  const [query, setQuery] = useSearchParams()
  const search = query.get('q') || ""

  const productApiInfo = async () => {
    let url = `https://my-json-server.typicode.com/goatisgoat/H-M/products/?q=${search}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductAllInfo(data);
  };

  useEffect(() => {
    productApiInfo();
  }, [query]);

  return (
    <Container>
      <Row>
        {productAllInfo?.map((item, index) => (
          <Col lg={3}>
            {" "}
            <ProductCards item={item} userlogin={userlogin} index={index}/>{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
