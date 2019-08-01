import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

import './BreadCrumbs.css';

function BreadCrumbs(props) {
  return (
    <div className="BreadCrumbs">
      <Container>
        <Row>
          <Col>
            <div className="links">
              <span>
                <RRNavLink to='/'>Home</RRNavLink>
              </span>
              <span>/</span>
              <span>{props.category.name}</span>
            </div>
            <h2>{props.category.name}</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

BreadCrumbs.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
};

export default BreadCrumbs;