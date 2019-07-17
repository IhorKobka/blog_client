import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import Post from "../Post/Post"

function FeaturedPostsList(props) {
  return (
    <Container>
      <Row>
        {props.posts.map((post, index) => (
          <Col key={index} xs={index === 0 ? null : '6'}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

FeaturedPostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    created_at: PropTypes.string,
    category: {
      id: PropTypes.number,
      name: PropTypes.string
    }
  }))
};

export default FeaturedPostsList;