import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import RecentPhoto from "../../asset/image/mobilepondit.png";
import {Link} from "react-router-dom";
import rest from "../../RestApi/Rest";
import AppUrl from "../../RestApi/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Gallary extends Component {
    constructor() {
        super();
        this.state={
            myData:[],
            Loading:true,
            error:false,
        }
    }
    componentDidMount() {
        rest.GetRequest(AppUrl.projectAll).then(result => {
            if(result==null){
                this.setState({error:true,Loading:false})
            }else {
                this.setState({myData:result,Loading:false})

            }

        })
    }

        render() {
            if(this.state.Loading == true && this.state.error==false){
                return <Loading/>
            }else if(this.state.Loading==false && this.state.error==false){
                const myList = this.state.myData;
                const myVeiw= myList.map(myList=>{
                    return   <Col lg={4} md={6} sm={12}>
                        <Card className='RecentProject'  >
                            <Card.Img variant="top" src={myList.projectimagesone} />
                            <Card.Body>
                                <Card.Title className='RecentProjectTitle' >{myList.projectname}</Card.Title>
                                <Card.Text className="RecentProjectDescription">
                                    {myList.projectshortdescription}
                                </Card.Text>
                                <Button variant="primary"><Link to={'/ProjectDetails/'+myList.id+"/"+myList.projectname} className="StyleLink">  Details </Link> </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                });


                return (
                    <Fragment>
                        <Container className="text-center mt-5 ">
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

export default Gallary;