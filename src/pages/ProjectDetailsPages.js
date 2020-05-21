import React, {Component, Fragment} from 'react';
import TopNavbar from "../component/TopNavbar/TopNavbar";
import PageTop from "../component/PageTop/PageTop";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";

class ProjectDetailsPages extends Component {
    constructor({match}) {
        super();
        this.state={
            projectPassedID:match.params.projectID,
            projectPassedName:match.params.projectName,
        }
    }
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar Toptitle='Projectdetails'/>
                <PageTop Title={this.state.projectPassedName}/>
                <ProjectDetails id={this.state.projectPassedID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPages;