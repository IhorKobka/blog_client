import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import BigPost from "../../Posts/BigPost/BigPost";
import MediumPost from "../../Posts/MediumPost/MediumPost";

function FeaturedPosts(props) {
  return (
    <Container>
      <h2>Featured Posts</h2>
      <Row>
        {props.posts.map((post, index) => (
          index === 0 ?
            <Col key={index} md='12'>
              <BigPost post={post}/>
            </Col>
            :
            <Col key={index} md='6'>
              <MediumPost post={post} />
            </Col>
        ))}
      </Row>
    </Container>
  )
}

FeaturedPosts.propTypes = {
  posts: PropTypes.array
};

export default FeaturedPosts;