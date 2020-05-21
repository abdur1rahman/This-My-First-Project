import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import WentWrong from "../WentWrong/WentWrong";
import Loading from "../Loading/Loading";



class Sumary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryFixed text-center summarySection p-0">
                    <div className="summaryFixedBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12} >
                                    <Row className='CountSection'>
                                        <Col>
                                            <h1 className='CounterTitle'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (

                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='CounterSubTitle'> Total Project </h4>
                                            <hr className='bg-white w-25'/>
                                        </Col>
                                        <Col>
                                            <h1 className='CounterTitle'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (

                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='CounterSubTitle'> Total Project</h4>
                                            <hr className='bg-white w-25'/>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={4} md={6}sm={12}>
                                    <Card className='CarWork'>
                                        <Card.Body >
                                            <Card.Title className='CardTitle text-justify'>How I Work</Card.Title>
                                            <Card.Text>
                                                <p className='CardubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className="cardIcon" /> Requerment Getharing</p>
                                                <p className='CardubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle}  className="cardIcon" />  System Analisysi</p>
                                                <p className='CardubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle}  className="cardIcon" /> Coding Test</p>
                                                <p className='CardubTitle text-justify'> <FontAwesomeIcon icon={faCheckCircle} className="cardIcon" />  Implimention</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Sumary;