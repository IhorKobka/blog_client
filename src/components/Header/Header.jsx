import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import logo from '../../images/logo.png';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar className='Header' color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className='category-nav green' href="#">Web Design</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='category-nav orange' href="#">JavaScript</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='category-nav blue' href="#">CSS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='category-nav violet' href="#">Jquery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contacts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
