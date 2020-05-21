import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AboutDescription extends Component {
    constructor() {
        super();
        this.state={
            desc:'',
            Loading:true,
            error:false
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.informetionetc).then(result => {
            if(result==null){
                this.setState({error:true,Loading:false})
            }else{
                this.setState({desc:result[0]['about'], Loading:false})
            }
        }).catch(error=>{
            this.setState({error:true,Loading:false})
        })
    }
    render() {
        if(this.state.Loading == true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading == false && this.state.error==false){
            return (
                <Fragment>
                    <Container className='mt-5'>
                        <Row>
                            <Col sm={12}lg={12} md={12}>
                                { ReactHtmlParser(this.state.desc)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }

    }
}

export default AboutDescription;