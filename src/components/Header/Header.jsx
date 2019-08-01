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
import {NavLink as RRNavLink} from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'
import {PropTypes} from "prop-types";
import {categoryColor} from "../../utils/category-color";

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
          <NavbarBrand tag={RRNavLink} to="/">
            <img src={logo} alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              {this.props.categories.map((category) =>
                <NavItem key={category.id}>
                  <NavLink tag={RRNavLink} className={`category-nav ${categoryColor(category.id)}`}
                           to={`/posts_by_category/${category.id}`}>
                    {category.name}
                  </NavLink>
                </NavItem>
              )}
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

Header.propTypes = {
  categories: PropTypes.array
};

export default Header;
