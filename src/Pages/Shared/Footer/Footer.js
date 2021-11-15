import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className='bg-warning mt-3 pt-4'>
            <Container>
                <div className='w-25 m-auto'>
                    <img className='img-fluid' src="https://www.argyllmotorsports.com/images/argyllmotorsports-logo.png" alt="" />
                </div>
                <Row>
                    <Col md='6' sm='12 m-auto mt-4' style={{ color: "#F2F3F4" }}>
                        <h3 className='text-light'>Ensuring your satisfication is our passion</h3>
                        <p>AMS has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                    </Col>
                </Row>
                <div className='text-center'><small>&copy;2021 this site is created by Arnob</small></div>
            </Container>
        </div>
    );
};

export default Footer;