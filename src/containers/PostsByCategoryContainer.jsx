import React, {Fragment, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useObserver } from 'mobx-react-lite';
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Advertise from "../components/Advertise/Advertise";
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import TagsList from "../components/TagsList/TagsList";
import PostsList from "../components/PostsList/PostsList";

function PostsByCategoryContainer(props) {
  const category = findCategory(props.appStore.categories, props.match.params.id);
  useEffect(
    () => {
      props.store.fetchPosts(category.id)
    },
    []
  );

  return useObserver(() =>
    <Fragment>
      <BreadCrumbs category={category}/>
      <Container>
        <Row>
          <Col md='8'>
            <Row>
              <Col>
                <Advertise width={728} height={90}/>
              </Col>
            </Row>
            <Row>
              <PostsList posts={props.store.posts}/>
            </Row>
          </Col>
          <Col md='4'>
            <Row>
              <Advertise width={300} height={250}/>
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

export default PostsByCategoryContainer

function findCategory(categories = [], id) {
  return categories.find(category => category['id'] === parseInt(id)) || {}
}