import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import MediumPost from "../../Posts/MediumPost/MediumPost";

function RecentPosts(props) {
  return(
    <Container>
      <h2>Recent Posts</h2>
      <Row>
        {props.posts.map((post, index) => (
          <Col key={index} md='4'>
            <MediumPost post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

RecentPosts.propTypes = {
  posts: PropTypes.array
};

export default RecentPosts;