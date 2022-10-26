import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftNavBar from '../Shared/LeftNavBar/LeftNavBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={"3"}>
                        <LeftNavBar></LeftNavBar>
                    </Col>
                    <Col lg={"9"}>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;