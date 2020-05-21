import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from "../../../src/asset/image/loder.svg";

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="LoadingAnimation" src={loading}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;