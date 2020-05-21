import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Rest from "../../RestApi/Rest";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class CoursesDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            courscePassedID:this.props.id,
                long_title:'',
                long_description:'',
                total_lecture:'',
                total_stduent:'',
                all_skills:'',
                video_url:'',
                cours_link:'',
                Loading:true,
                error:false,
        }
    }

    componentDidMount() {
        Rest.GetRequest(AppUrl.courseDetails+this.state.courscePassedID).then(result=>{
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({

                    long_title:result[0]['longtitle'],
                    long_description:result[0]['longdescription'],
                    total_lecture:result[0]['totallecture'],
                    total_stduent:result[0]['totalstduent'],
                    all_skills:result[0]['allskills'],
                    video_url:result[0]['videourl'],
                    cours_link:result[0]['courslink'],
                    Loading:false,
                });
            }

        }).catch(error=>{
            this.setState({error:true,Loading:false})
        })
    }
    render() {
        if(this.state.Loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false) {
            return (
                <Fragment>
                    <Container fluid={true} className="topPageFixdBanner p-0">
                        <div className="topPageBannerOverlay">
                            <Container className="topPageContent">
                                <Row>
                                    <Col lg={6} md={12} sm={12}>
                                        <h1 className='CouresDetailsTitle'> {this.state.long_title}</h1>
                                        <h5 className='CouresDetailsSubTitle'>Total Lecture = {this.state.total_lecture}</h5>
                                        <h5 className='CouresDetailsSubTitle'> Total Student = {this.state.total_stduent}</h5>
                                    </Col>
                                    <Col lg={6} md={12} sm={12}>
                                        <p className='CouesDetailsDescription'> {this.state.long_description} </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className='mt-5'>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h3 className='serviceName'>Skill Our Get</h3>
                                {ReactHtmlParser(this.state.all_skills)}
                                <Button target="_blank" href={"//"+this.state.cours_link} varint="primary">Mor Info</Button>

                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Player>
                                    <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
                                    <BigPlayButton position='center'/>
                                </Player>
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
export default CoursesDetails;