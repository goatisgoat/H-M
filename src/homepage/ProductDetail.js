import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [getOneInfo, setGetOneInfo] = useState();
  const getdetailinfo = async () => {
    let url = `https://my-json-server.typicode.com/goatisgoat/H-M/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setGetOneInfo(data);
  };
  useEffect(() => {
    getdetailinfo();
  }, []);
  return (
    <Container className="detailbox">
      <Row>
        <Col>
          <img src={getOneInfo?.img} />
        </Col>
        <Col>
          <div className="detailbottombox">
            <p>{getOneInfo?.title}</p>
            <p>₩{getOneInfo?.price}</p>

            <br />
            <p>{getOneInfo?.choice === true ? "Conscious choice" : <br />}</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  {getOneInfo?.size[0]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  {getOneInfo?.size[1]}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  {getOneInfo?.size[2]}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="detailbutton" variant="dark">
              click
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
