import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftNavBar from '../Shared/LeftNavBar/LeftNavBar';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <div className="container-lg mt-5">
          <Row>
            <Col lg={"4"} className="d-none d-lg-block">
              <LeftNavBar></LeftNavBar>
            </Col>
            <Col lg={"8"} sm={"12"}>
              <Outlet></Outlet>
            </Col>
          </Row>

          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;