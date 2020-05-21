import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import RefundPolicy from "../component/RefundPolicy/RefundPolicy";

class RefundPolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='RefundPolicy'/>
                <PageTop Title='RefundPolicy'/>
                <RefundPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPolicyPage;