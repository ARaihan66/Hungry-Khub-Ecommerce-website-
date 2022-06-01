import React from 'react';
import { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    state={
        isNavOpen : false,
    }

    openNavLink = ()=>{
        this.setState({
           isNavOpen : !this.state.isNavOpen, 
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand='sm'>
                    <NavbarBrand className="me-auto" href="/" >
                        Hungry Khub
                    </NavbarBrand>
                    <NavbarToggler onClick={this.openNavLink} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem style={{padding:'12px'}}>
                                <Link to="/" className='nav-link active'>
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem style={{padding:'12px'}}>
                                <Link to="/menu" className='nav-link'>
                                    Menu
                                </Link>
                            </NavItem>
                            <NavItem style={{padding:'12px'}}>
                                <Link to="/About" className='nav-link'>
                                    About
                                </Link>
                            </NavItem>
                            <NavItem style={{padding:'12px'}}>
                                <Link to="/contact" className='nav-link'>
                                    Contact
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}

export default Navigation;