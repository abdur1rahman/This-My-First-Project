import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import rahman from "../../asset/image/DSC_9240.JPG";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ClientRevew extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.ClientReview).then(result => {
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
        var settings = {
            autoplaySpeed: 3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        if(this.state.Loading==true && this.state.error==false){
            return <Loading/>
        }else if(this.state.Loading==false && this.state.error==false) {
            const myList = this.state.myData;
            const myVeiw= myList.map(myList=>{
                return  <div>
                    <Row className='text-center justify-content-center'>
                        <Col lg={6} md={6} sm={12}>
                            <img src ={myList.clientimg} className='carusel'/>
                            <h1 className='serviceName'>{myList.clienttitle}</h1>
                            <p className="serviceDescription">{myList.clientdescription}</p>
                        </Col>
                    </Row>
                </div>

            });
            return (
                <Fragment>
                    <Container className='text-center'>
                        <h1 className='serviceMainTitle'> CLIENT SAYS </h1>
                        <Slider {...settings}>

                            {myVeiw}
                        </Slider>
                    </Container>
                </Fragment>
            );
        }else if(this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default ClientRevew;