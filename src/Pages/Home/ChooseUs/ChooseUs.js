import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../images/blog/img1.png'
import img2 from '../../../images/blog/img2.png'
import img3 from '../../../images/blog/img3.png'

const ChooseUs = () => {
    return (
      <div className="container">
        <div className="mt-5 text-center">
          <button className="btn btn-secondary border-0">
            Checkout our food
          </button>
        </div>
        <div className="ps-4 mt-5">
          <h4>Why choose us?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
            Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
          </p>
        </div>
        <Row xs={1} md={3} className="g-4 mt-4">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <i className="fas fa-bus fa-2x text-danger"></i>
                <Card.Title className="d-inline ms-2 fw-bold">
                  fast delivery
                </Card.Title>
                <Card.Text className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <i className="fas fa-bell fa-2x text-danger"></i>
                <Card.Title className="d-inline ms-2 fw-bold">
                  a good auto responder
                </Card.Title>
                <Card.Text className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <i className="fas fa-truck fa-2x text-danger"></i>
                <Card.Title className="d-inline ms-2 fw-bold">
                  home delivery
                </Card.Title>
                <Card.Text className="ps-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus, ipsam. Nihil voluptatem quo corrupti ab!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default ChooseUs;