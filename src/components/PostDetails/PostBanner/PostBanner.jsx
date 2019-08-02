import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {PropTypes} from "prop-types";
import PostCategory from "../../Posts/PostCategory/PostCategory";

import './PostBanner.css';

function PostBanner(props) {
  return (
    <div className="Banner" style={{backgroundImage: "url('https://via.placeholder.com/2000x500')"}}>
      <Container>
        <Row>
          <Col>
            <div className="meta">
              <PostCategory category={props.category}/>
              <span className="date">{props.created_at}</span>
              <h3 className="title">{props.title}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

PostBanner.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  created_at: PropTypes.string,
  category: PropTypes.object
};

export default PostBanner;