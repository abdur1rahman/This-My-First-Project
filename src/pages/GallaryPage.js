import React, {Component,Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import Gallary from "../component/Gallary/Gallary";
import Footer from "../component/Footer/Footer";

class GallaryPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='gallary'/>
                <PageTop Title='OUR GALLARY'/>
                <Gallary/>
                <Footer/>
            </Fragment>
        );
    }
}

export default GallaryPage;