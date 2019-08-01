import React from "react";
import {Col, Container, Row} from "reactstrap";
import DetailedPost from "../Posts/DetailedPost/DetailedPost";
import { PropTypes } from 'prop-types';

import './PostsList.css';

function PostsList(props) {
  return (
    <div className="PostsList">
      <Container>
        <Row>
          {
            props.posts.map((post, index) => (
              <Col key={index} md='12'>
                <DetailedPost post={post}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array
};

export default PostsList;