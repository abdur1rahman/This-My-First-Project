import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageFixdBanner p-0">
                    <div className="topPageBannerOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topPageTitle">{this.props.Title}</h1>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;