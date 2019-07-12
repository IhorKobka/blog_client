import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import Post from "../Post/Post";

function RecentPostsList(props) {
  return(
    <Container>
      <h2>Recent Posts</h2>
      <Row>
        {props.posts.map((post, index) => (
          <Col key={index} xs='4'>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

RecentPostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    created_at: PropTypes.string,
    category: {
      id: PropTypes.number,
      name: PropTypes.string
    }
  }))
};

export default RecentPostsList;