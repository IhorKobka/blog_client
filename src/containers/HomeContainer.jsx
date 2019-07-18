import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentPosts from '../components/PostsList/RecentPosts/RecentPosts';
import FeaturedPosts from '../components/PostsList/FeaturedPosts/FeaturedPosts';
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";

class HomeContainer extends Component {
  state = {
    posts: [
      { title: 'Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
      { title: 'Post', created_at: 'March 27, 2018', category: { id: 1, name: 'category' } },
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
            <MostReadPosts posts={this.state.posts} shortList={true}/>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <MostReadPosts posts={this.state.posts} shortList={false}/>
          </Col>
          <Col md='4'>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;