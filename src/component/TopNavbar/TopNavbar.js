import React, {Component, Fragment} from 'react';
import white from '../../asset/image/navlogo.svg';
import blue from '../../asset/image/navlogoScroll.svg';
import {Container, Nav, Navbar,} from 'react-bootstrap'
import '../../asset/css/Coustom.css';
import '../../asset/css/bootstrap.min.css';
import "../../asset/css/rescponsive.css";
import {NavLink} from "react-router-dom";

class TopNavbar extends Component {
    constructor(props){
        super();
        this.state={
            navBarTitle:'navTitle',
            navLogo: [white],
            colapsIcon:'dark',
            navBackground:'navBackground',
            navItems:'navItem',
            Routfavicon:props.Toptitle,
        }
    }
    onScrool=()=>{
        if(window.scrollY>100){
            this.setState({
                colapsIcon:'light', navBarTitle:'navTitleScroll',navBackground:'navBackgroundScroll',navItems:'navItemScroll', navLogo:[blue],
            })
        }
        else if(window.scrollY<100){
            this.setState({
                colapsIcon:'dark', navBarTitle:'navTitle', navBackground:'navBackground', navItems:'navItem', navLogo:[white],
            })
        }
    }
    componentDidMount() {
       window.addEventListener("scroll", this.onScrool) ;
    }

    render() {
        return (
            // eslint-disable-next-line react/jsx-no-undef
            <Fragment>
                <title>{this.state.Routfavicon}</title>
                <Navbar variant={this.state.colapsIcon} fixed='top' collapseOnSelect expand="lg"className={this.state.navBackground}>
                    <Navbar.Brand> <NavLink to='/' className={this.state.navBarTitle}><img className="Logo" src={this.state.navLogo}/> Abdur-Rahman</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} to="/"className={this.state.navItems}>HOME</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}}to="/Service"className={this.state.navItems}>SERVICES</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} to="/coursepage"className={this.state.navItems}>COURSES</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} to="/gallary"className={this.state.navItems}>PORTFOLIO</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} to="/conteact"className={this.state.navItems}>CONTACT</NavLink> </Nav.Link>
                            <Nav.Link>  <NavLink exact activeStyle={{color:'#00a8ee'}} to="/about" className={this.state.navItems}>ABOUT</NavLink> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavbar;