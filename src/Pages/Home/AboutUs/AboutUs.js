import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div id='testimonial' style={{ background: '#EDBB99' }} className='py-3'>
            <h2 className='ms-3'>Testimonial</h2>
            <Container>
                <Row>
                    <Col md='6' sm='12'>
                        <h2>Our Reputation Speaks</h2>
                        <div>
                            <p>AMS has been raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, bikers can leave the forecourt with total reassurance and peace of mind.</p>
                            <p>For bikrs, we calculate a fair retail price based on a detailed analysis of comparable current and previous car listings in a given market.</p>
                        </div>
                    </Col>
                    <Col md='6' sm='12'>
                        <img className='img-fluid' src="https://cdn1.cycletrader.com/v1/media/6165da624280de53b84f569f.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;