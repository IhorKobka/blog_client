import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentPosts from '../components/PostsList/RecentPosts/RecentPosts';
import FeaturedPosts from '../components/PostsList/FeaturedPosts/FeaturedPosts';
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import Advertise from "../components/Advertise/Advertise";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import TagsList from "../components/TagsList/TagsList";
import { PropTypes } from 'prop-types';
import { useObserver } from 'mobx-react-lite';

function HomeContainer(props) {
  const [categories] = useState([
    { id: 1, name: 'category', posts_count: 100 },
    { id: 2, name: 'category', posts_count: 10 },
    { id: 3, name: 'category', posts_count: 100 },
    { id: 4, name: 'category', posts_count: 5 },
  ]);
  const [tags] = useState([
    { id: 1, name: 'Chrome' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'Tutorial' },
    { id: 1, name: 'Backend' },
    { id: 1, name: 'JQuery' },
    { id: 1, name: 'Design' },
    { id: 1, name: 'Development' },
    { id: 1, name: 'JavaScript' },
    { id: 1, name: 'Website' },
  ]);

  useEffect(
    () => {
      props.store.fetchRecentPosts();
      props.store.fetchFeaturedPosts();
      props.store.fetchMostReadPosts();
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
            <MostReadPosts posts={props.store.mostReadPostsShort} shortList={true}/>
          </Row>
          <Row>
            <Advertise width={300} height={250}/>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md='8'>
          <MostReadPosts posts={props.store.mostReadPosts} shortList={false}/>
        </Col>
        <Col md='4'>
          <Row>
            <Advertise width={300} height={250}/>
          </Row>
          <Row>
            <CategoriesList categories={categories}/>
          </Row>
          <Row>
            <TagsList tags={tags} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

HomeContainer.propTypes = {
  store: PropTypes.object
};

export default HomeContainer;