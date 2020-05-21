import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import CoursesDetails from "../component/CoursesDetails/CoursesDetails";
import Footer from "../component/Footer/Footer";
import AppUrl from "../RestApi/AppUrl";
import Rest from "../RestApi/Rest";

class CoursesDetailsPages extends Component {

    constructor({match}) {
        super();
        this.state={
            courscePassedID:match.params.coursID,
        }
    }
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavbar/>
                <CoursesDetails id={this.state.courscePassedID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesDetailsPages;