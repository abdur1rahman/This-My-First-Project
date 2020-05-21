import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import AboutDescription from "../component/AboutDescription/AboutDescription";
import Footer from "../component/Footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='aboute' />
                <PageTop Title='ABOUT AS'/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;