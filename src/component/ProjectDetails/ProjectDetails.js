import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import image from "../../asset/image/mobilepondit.png";
import rest from  "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class ProjectDetails extends Component {
    constructor(props) {
        super();
        this.state={
            ID:props.id,
            projectname:'',
            projectimagetwo:'',
            projectshortdescription:'',
            projectfetuer:'',
            liveprevew:'',
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.projectDetails+this.state.ID).then(result=>{
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({
                    projectimagetwo:result[0]['projectimagetwo'],
                    projectname:result[0]['projectname'],
                    projectshortdescription:result[0]['projectshortdescription'],
                    projectfetuer:result[0]['projectfetuer'],
                    liveprevew: result[0]['liveprevew'],
                    Loading:false
                });
            }

        }).catch(error=>{
            this.setState({error:true,Loading:false})
        })
    }

    render() {
        if(this.state.Loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false){
            return (
                <Fragment>
                    <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <img src={this.state.projectimagetwo}/>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <h1 className='serviceName'>{this.state.projectname}</h1>
                                <p className='serviceDescription'>{this.state.projectshortdescription}</p>
                                { ReactHtmlParser(this.state.projectfetuer)}
                                <Button target="_blank" href={"//"+this.state.liveprevew} varint="primary">Mor Info</Button>
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

export default ProjectDetails;