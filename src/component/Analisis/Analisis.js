import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class Analisis extends Component {
    constructor() {
        super();
        this.state={
            data:[],
            des:'',
            Loading:true,
            error:false,
        }

    }

    componentDidMount() {
        rest.GetRequest(AppUrl.chartData).then(result => {
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({data:result,Loading:false})
            }
        })
        rest.GetRequest(AppUrl.TecDes).then(result => {
            if(result==null){
                this.setState({error:true, Loading:false})
            }else{
                this.setState({des:result[0]['tecdescription']})
            }
        }).catch(error=>{
            this.setState({error:true, Loading:false})
        })
    }
    render() {
        var blue="rgba(0,115,230,0.8)"
        if(this.state.Loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false) {
            return (
                <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">Technlogy Used</h1>
                        <Row>
                            <Col style={{width:'100%', height:'300px'}} lg={6} sm={12} md={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey='Technology'/>
                                        <Tooltip/>
                                        <Bar dataKey='Project' fill={blue}>
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} sm={12} md={12}>
                                <p className="text-justify des">{ ReactHtmlParser(this.state.des)}</p>
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

export default Analisis;