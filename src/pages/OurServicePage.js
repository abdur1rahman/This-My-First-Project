import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import OurSevice from "../component/OurService/OurSevice";
import Footer from "../component/Footer/Footer";
import Conteact from "../component/Conteact/Conteact";

class OurServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='service' />
                <PageTop Title="OUR SERVICE" />
                <OurSevice/>
                <Conteact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default OurServicePage;