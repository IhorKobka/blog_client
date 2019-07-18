import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import SmallPost from "../../Posts/SmallPost/SmallPost";
import DetailedPost from "../../Posts/DetailedPost/DetailedPost";

function MostReadPosts(props) {
  return (
    <Container>
      <h2>Most Read</h2>
        <Row>
          {
            props.shortList ?
              props.posts.map((post, index) => (
                  <Col key={index} md='12'>
                    <SmallPost post={post}/>
                  </Col>
                ))
              :
              props.posts.map((post, index) => (
                <Col key={index} md='12'>
                  <DetailedPost post={post}/>
                </Col>
              ))
          }
        </Row>
    </Container>
  )
}

MostReadPosts.propTypes = {
  shortList: PropTypes.bool,
  posts: PropTypes.array
};

export default MostReadPosts;