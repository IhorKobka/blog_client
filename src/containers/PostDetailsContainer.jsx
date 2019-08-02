import React, {Fragment} from 'react';
import { PropTypes } from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
// import PostDetails from "../components/PostDetails/PostDetails";
import PostBanner from "../components/PostDetails/PostBanner/PostBanner";
import Advertise from "../components/Advertise/Advertise";
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import TagsList from "../components/TagsList/TagsList";

function PostDetailsContainer(props) {
  return (
    <Fragment>
      <PostBanner title={'test'} created_at={'qweqweq'} category={{id: 1, name: 'test'}}/>
      <Container>
        <Row>
          <Col md={8}>

          </Col>
          <Col md={4}>
            <Row>
              <Col>
                <Advertise width={300} height={250}/>
              </Col>
            </Row>
            <Row>
              <MostReadPosts posts={props.appStore.mostReadPostsShort} shortList={true}/>
            </Row>
            <Row>
              <CategoriesList categories={props.appStore.categories}/>
            </Row>
            <Row>
              <TagsList tags={props.appStore.tags} />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

PostDetailsContainer.propTypes = {
  appStore: PropTypes.object
};

export default PostDetailsContainer;