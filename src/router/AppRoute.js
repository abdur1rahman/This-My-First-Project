import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import OurServicePage from "../pages/OurServicePage";
import CoursePage from "../pages/CoursePage";
import GallaryPage from "../pages/GallaryPage";
import ConteactPage from "../pages/ConteactPage";
import AboutPage from "../pages/AboutPage";
import Home from "../pages/Home";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import TramsOfConditionPage from "../pages/TramsOfConditionPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPages from "../pages/ProjectDetailsPages";
import CoursesDetailsPages from "../pages/CoursesDetailsPages";

class AppRoute extends Component {
    render() {
        return (
           <Fragment>
               <Switch>
                   <Route exact path="/" component={Home} />
                   <Route exact path="/Service" component={OurServicePage}/>
                   <Route exact path="/coursepage" component={CoursePage}/>
                   <Route exact path="/gallary" component={GallaryPage}/>
                   <Route exact path="/conteact" component={ConteactPage}/>
                   <Route exact path="/about" component={AboutPage}/>
                   <Route exact path="/RefundPolicy" component={RefundPolicyPage}/>
                   <Route exact path="/privacy" component={PrivacyPage}/>
                   <Route exact path="/ProjectDetails/:projectID/:projectName" component={ProjectDetailsPages}/>
                   <Route exact path="/CoursDetails/:coursID" component={CoursesDetailsPages}/>
                   <Route exact Path="/TramsCondition" component={TramsOfConditionPage}/>
               </Switch>
           </Fragment>
        );
    }
}

export default AppRoute;