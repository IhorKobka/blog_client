import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentPosts from '../components/PostsList/RecentPosts/RecentPosts';
import FeaturedPosts from '../components/PostsList/FeaturedPosts/FeaturedPosts';
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import Advertise from "../components/Advertise/Advertise";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import TagsList from "../components/TagsList/TagsList";

class HomeContainer extends Component {
  state = {
    posts: [
      { title: 'Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 2, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 3, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 4, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
    ],
    categories: [
      { id: 1, name: 'category', posts_count: 100 },
      { id: 2, name: 'category', posts_count: 10 },
      { id: 3, name: 'category', posts_count: 100 },
      { id: 4, name: 'category', posts_count: 5 },
    ],
    tags: [
      { id: 1, name: 'Chrome' },
      { id: 1, name: 'CSS' },
      { id: 1, name: 'Tutorial' },
      { id: 1, name: 'Backend' },
      { id: 1, name: 'JQuery' },
      { id: 1, name: 'Design' },
      { id: 1, name: 'Development' },
      { id: 1, name: 'JavaScript' },
      { id: 1, name: 'Website' },
    ]
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <RecentPosts posts={this.state.posts}/>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <FeaturedPosts posts={this.state.posts}/>
          </Col>
          <Col md='4'>
            <Row>
              <MostReadPosts posts={this.state.posts} shortList={true}/>
            </Row>
            <Row>
              <Advertise width={300} height={250}/>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <MostReadPosts posts={this.state.posts} shortList={false}/>
          </Col>
          <Col md='4'>
            <Row>
              <Advertise width={300} height={250}/>
            </Row>
            <Row>
              <CategoriesList categories={this.state.categories}/>
            </Row>
            <Row>
              <TagsList tags={this.state.tags} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;