import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import TopBanner from "../component/TopBanner/TopBanner";
import Services from "../component/Services/Services";
import Analisis from "../component/Analisis/Analisis";
import Sumary from "../component/Sumary/Sumary";
import RecentProject from "../component/RecentProject/RecentProject";
import OurCources from "../component/OurCources/OurCources";
import Video from "../component/Video/Video";
import ClientRevew from "../component/ClientRevew/ClientRevew";
import Footer from "../component/Footer/Footer";

class Home extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='home'/>
                <TopBanner/>
                <Services/>
                <Analisis/>
                <Sumary/>
                <RecentProject/>
                <OurCources/>
                <Video/>
                <ClientRevew/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Home;