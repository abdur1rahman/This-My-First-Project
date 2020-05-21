import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import PrivacyDescription from "../component/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='Privacy'/>
                <PageTop Title='Privacy'/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;