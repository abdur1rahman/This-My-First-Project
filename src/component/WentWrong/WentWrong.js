import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import error from "../../asset/image/alert1.png";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="LoadingAnimation" src={error}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;