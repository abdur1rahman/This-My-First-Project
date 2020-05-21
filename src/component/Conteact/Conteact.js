import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Conteact extends Component {
    constructor() {
        super();
        this.state={
            address:'',
            Loading:true,
            emaill:'',
            phone:'',
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.footersubmit).then(result => {
            if(result==null){
                this.setState({error:true, Loading:false})
            }else {
                this.setState({
                    address:result[0]['address'],
                    Loading:false,
                    emaill:result[0]['emaill'],
                    phone:result[0]['phone'],

                })
            }

        }).catch(erro=>{
            this.setState({error:true, Loading:false})
        })
    }
    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;
        let jsoneObject = {name:name,email:email,msg:msg};
    rest.PostRequest(AppUrl.contactSend,JSON.stringify(jsoneObject)).then(result=>{
        alert("Submit Sucsess")
    }).catch(error=>{
        alert("Error")
    })
    }
    render() {
        if(this.state.Loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false) {
            return (
                <Fragment>
                    <Container className='mt-5'>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className='serviceName'> Quick Connect </h1>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription"> Name </Form.Label>
                                        <Form.Control id='name' type="text"  required />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="serviceDescription"> Email Addres </Form.Label>
                                        <Form.Control id='email' type="email" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="serviceDescription"> Masses </Form.Label>
                                        <Form.Control id='msg' as="textarea" rows="3" />
                                    </Form.Group>
                                    <Button onClick={this.sendContact} variant="primary" >
                                        Submit
                                    </Button>
                                </Form>

                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h1 className='serviceName'> Discuss Now </h1>
                                <p className="serviceDescription"> {this.state.address} </p>
                                <p className="serviceDescription"> <FontAwesomeIcon icon={faEnvelope} /> {this.state.emaill} </p>
                                <p className="serviceDescription"> <FontAwesomeIcon icon={faPhone} /> {this.state.phone} </p>
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

export default Conteact;