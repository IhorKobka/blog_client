import React, {useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentPosts from '../components/PostsList/RecentPosts/RecentPosts';
import FeaturedPosts from '../components/PostsList/FeaturedPosts/FeaturedPosts';
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import Advertise from "../components/Advertise/Advertise";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import TagsList from "../components/TagsList/TagsList";
import { PropTypes } from 'prop-types';
import { useObserver } from 'mobx-react-lite';
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import {nextPage} from "../utils/pagination";

function HomeContainer(props) {
  const page = nextPage(props.appStore.mostReadPostsMeta);

  useEffect(
    () => {
      props.store.fetchRecentPosts();
      props.store.fetchFeaturedPosts();
    },
    []
  );
  return useObserver(() =>
    <Container>
      <Row>
        <Col>
          <RecentPosts posts={props.store.recentPosts}/>
        </Col>
      </Row>
      <Row>
        <Col md='8'>
          <FeaturedPosts posts={props.store.featuredPosts}/>
        </Col>
        <Col md='4'>
          <Row>
            <MostReadPosts posts={props.appStore.mostReadPostsShort} shortList={true}/>
          </Row>
          <Row>
            <Advertise width={300} height={250}/>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md='8'>
          <MostReadPosts posts={props.appStore.mostReadPosts} shortList={false}/>
          {
            page ? <LoadMoreBtn loadPosts={() => props.appStore.fetchMostReadPosts(page)}/> : null
          }
        </Col>
        <Col md='4'>
          <Row>
            <Advertise width={300} height={250}/>
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
  );
}

HomeContainer.propTypes = {
  store: PropTypes.object,
  appStore: PropTypes.object
};

export default HomeContainer;