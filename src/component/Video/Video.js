import React, {Component, Fragment} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from "video-react";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            videodescription:'',
            videourl:'',
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.Homevideo).then(result => {
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({
                    videodescription:result[0]['videodescription'],
                    emaill:result[0]['videourl'],
                    Loading:false,

                })
            }
        }).catch(error=>{
            this.setState({error:true,Loading:false})
        })
    }
    modalClose=()=>this.setState({  show:false  })
    modalOpen=()=>this.setState({show:true})
    render() {
        if(this.state.Loading==true  && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false){
            return (
                <Fragment>
                    <Container className='text-center'>
                        <Row>
                            <Col lg={12} sm={12} md={12} className='videoCard'>
                                <h1 className='serviceMainTitle'>How I Do</h1>
                                <p className='des' >{this.state.videodescription}</p>
                                <p className='playButton' onClick={this.modalOpen}> <FontAwesomeIcon icon={faPlayCircle}/> </p>
                            </Col>
                        </Row>
                    </Container>
                    <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                        <Modal.Body>
                            <Player>
                                <source src={this.state.videourl}/>
                                <BigPlayButton position='center'/>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default Video;
