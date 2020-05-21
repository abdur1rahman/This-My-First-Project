import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import AllCoures from "../component/AllCoures/AllCoures";
import Footer from "../component/Footer/Footer";

class CoursePage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='ourcours'/>
                <PageTop Title='OUR COURSES'/>
                <AllCoures />
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursePage;