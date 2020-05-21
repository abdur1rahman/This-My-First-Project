import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import Conteact from "../component/Conteact/Conteact";
import Footer from "../component/Footer/Footer";

class ConteactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='conteact'/>
                <PageTop Title='GET IN TOUCH '/>
                <Conteact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ConteactPage;