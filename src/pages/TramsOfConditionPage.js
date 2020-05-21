import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import TramsOfCondition from "../component/TramsOfCondition/TramsOfCondition";
import Footer from "../component/Footer/Footer";

class TramsOfConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='TramsCondition'/>
                <PageTop Title='Trams Of Condition'/>
                <TramsOfCondition/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TramsOfConditionPage;