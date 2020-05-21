import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from"@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class Footer extends Component {
    constructor() {
        super();
        this.state={
            address:'',
            emaill:'',
            phone:'',
            facebook:'',
            youtube:'',
            footercredit:'',
            loaderClass:'d-bloack',
            error:false
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.footersubmit).then(result => {
            if(result==null){
                this.setState({error:true})
            }else{
                this.setState({
                    address:result[0]['address'],
                    emaill:result[0]['emaill'],
                    phone:result[0]['phone'],
                    facebook:result[0]['facebook'],
                    youtube:result[0]['youtube'],
                    footercredit:result[0]['footercredit'],
                    loaderClass:'d-none'
                })
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }
    render() {
        if(this.state.error==false){
            return (
                <Fragment>
                    <Container fluid={true} className='FooterSection text-center'>
                        <Container>
                        <Row className=''>
                            <Col lg={3} md={6} sm={12} className='p-2 text-justify'>
                                <h2 className="serviceName">Follow Me</h2>
                                <a target="_blank" href={"//"+this.state.facebook} className="SocalLink"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                                <a target="_blank" href={"//" +this.state.youtube} className="SocalLink"><FontAwesomeIcon icon={faYoutube} /> Youtube</a><br/>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='p-2 text-justify'>
                                <h2 className="serviceName">Address</h2>
                                <span className={this.state.loaderClass}> <Loading/> </span>
                                <p className="serviceDescription">{this.state.address}</p>
                                <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> {this.state.emaill} </p>
                                <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> {this.state.phone} </p>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='p-2 text-justify'>
                                <h2 className="serviceName">Information</h2>
                                <Link  to='about' className="SocalLink">About Me</Link> <br/>
                                <Link to='conteact' className="SocalLink">Contact Me</Link>
                            </Col>
                            <Col lg={3} md={6} sm={12} className='p-2 text-justify'>
                                <h2 className="serviceName">Legal</h2>
                                <Link to='/RefundPolicy' className="SocalLink">Refund policy</Link> <br/>
                                <Link to='/TramsCondition' className="SocalLink">Terms and condition</Link> <br/>
                                <Link to='/privacy' className='SocalLink'>Privacy</Link>
                            </Col>

                        </Row>
                    </Container>
                        <Row>
                            <div className='BottomFooter'>Abdur Rahman@2020</div>
                        </Row>
                    </Container>

                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }

        }
    }

export default Footer;