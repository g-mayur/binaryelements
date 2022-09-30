import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "gatsby";
import LogoSVG from '../../assets/logo.svg';
import Call from "../../assets/footer/call.svg";
import SMS from "../../assets/footer/sms.svg";
import Location from "../../assets/footer/location.svg";

const Footer = () => {
  return (
    <footer className='footer'>
        <Container fluid>
            <Row className='align-items-center'>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                    <Link to="/" className='d-block logo text-center text-md-start'>
                        <img src={LogoSVG} alt="Binary Elements" />
                    </Link>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-4 mb-md-0">
                    <div className='phone d-flex align-items-center'>
                        <img src={Call} alt="Calling" className='me-3' />
                        <div className='call'>
                            <a href='tel:1300 834 077'>1300 834 077</a>
                            <span className='px-2'>|</span>
                            <a href='tel:03 9020 7900'>03 9020 7900</a>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-4 mb-md-0">
                    <div className='mail d-flex align-items-center'>
                        <img src={SMS} alt="SMS" className='me-3' />
                        <a href='mailto:talk_to@binaryelements.com.au'><span>talk_to</span>@binaryelements.com.au</a>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-4 mb-md-0">
                    <div className='location d-flex align-items-center'>
                        <img src={Location} alt="Location" className='me-3' />
                        <div><span>826 Lorimer St,</span> Port Melbourne VIC 3207</div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className='copyright mt-5 text-center d-flex align-items-center justify-content-center'>
                        <div className='text'>All Rights Reserved, ©2022 by Binaryelements.com.au</div>
                        <span className='px-2 py-3 py-md-0'>|</span>
                        <Link to="">Privacy Policy</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;