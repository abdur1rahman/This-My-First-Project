import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import rest  from "../../RestApi/Rest";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class TopBanner extends Component {
constructor() {
    super();
    this.state={
        Title:'',
        Subtitle:'',
        loaderClass:'text-center',
        mainDivClass:'d-none',
        WeantWrong:"d-none",
    }
}
    componentDidMount() {
        rest.GetRequest(AppUrl.HomeTitle).then(result => {
            if(result==null){
                this.setState({loaderClass:"d-none",mainDivClass:"d-none",WeantWrong:"text-center"})
            }else {
                this.setState({Title: result[0]['hometitle'], Subtitle: result[0]['homesubtitle'],loaderClass:'d-none',mainDivClass:"text-center"})
            }

        }).catch(error => {
            this.setState({loaderClass:"d-none",mainDivClass:"d-none",WentWrong:"text-center"})

        });
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixdBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.WeantWrong}>
                                    <WentWrong/>
                                </Col>
                                <Col className={this.state.loaderClass}>
                                    <Loading/>
                                </Col>
                                <Col className={this.state.mainDivClass}>
                                    <h1 className="topTitle">{this.state.Title}</h1>
                                    <h4 className="topSubTitle">{this.state.Subtitle}</h4>
                                    <Button varint="primary">Mor Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;