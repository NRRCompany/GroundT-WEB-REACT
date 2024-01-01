import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import personCircleImg from './person-circle.png'

const Navigation = () => {
    const navLogStyleObj = {
        marginLeft: '15px',
    };

    const personCircleImgStyleObj = {
        width: '40px',
        marginRight: '20px',
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary-gray" style={{background:'#3282B8'}}>
            <Link to="/">
                <div style={navLogStyleObj}>
                    <div className="nav_logo">
                        Ground <span>T</span>
                    </div>
                </div>
            </Link>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/근태관리">
                            <Nav.Link>근태관리</Nav.Link>
                        </Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div>
                <Link to="/login">
                    <Row>
                        <Col xs={6} md={4}>
                            <Image style={ personCircleImgStyleObj } src={ personCircleImg } roundedCircle />
                        </Col>
                    </Row>
                </Link>
            </div>
        </Navbar>
    );
};

export default Navigation;
