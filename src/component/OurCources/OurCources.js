import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Courses from "./../../asset/image/download.jfif"
import {Link} from "react-router-dom";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class OurCources extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.coursHome).then(result => {
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({myData:result,Loading:false})
            }
        }).catch(error=>{
            this.setState({error:true,Loading:false})
        })
    }
    render() {
        if(this.state.Loading==true && this.state.error==false){
           return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false) {
            const myList = this.state.myData;
            const myVeiw= myList.map(myList=>{
                return <Col lg={6} md={12} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img src={myList.smallimages} className='ourCoureseImg'/>
                        </Col>
                        <Col lg={6} md={6} sm={12}  >
                            <h1 className='text-justify ourCourseTitle'>{myList.shorttitle}</h1>
                            <p className='text-justify courseDescription'>{myList.shortdescription}</p>
                            <Link to={'/CoursDetails/'+myList.id} className='courseDetails float-left'>Details</Link>
                        </Col>
                    </Row>
                </Col>
            });
            return (
                <Fragment>
                    <Container className='text-center'>
                        <h1 className='serviceMainTitle'>OUR COURESES</h1>
                        <Row>
                            {myVeiw}
                        </Row>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }
    }
}
export default OurCources;