import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import web from "../../asset/image/web.svg";
import mobile from "../../asset/image/mobil.svg";
import grapics from "../../asset/image/grapics.svg";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class OurSevice extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.servicename).then(result => {
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
        }else if(this.state.Loading==false && this.state.error==false){
            const myList = this.state.myData;
            const myVeiw= myList.map(myList=>{
                return  <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img src={myList.serviceimages}/>
                        <h2 className="serviceName">{myList.servicename}</h2>
                        <p className="serviceDescription">{myList.servicedesciption}</p>
                    </div>
                </Col>
            });
            return (
                <Fragment>
                    <Container>
                        <h1 className="serviceMainTitle text-center"> OUR SERVICE</h1>
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
export default OurSevice;