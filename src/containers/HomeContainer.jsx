import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import RecentPosts from '../components/PostsList/RecentPosts/RecentPosts';
import FeaturedPosts from '../components/PostsList/FeaturedPosts/FeaturedPosts';
import MostReadPosts from "../components/PostsList/MostReadPosts/MostReadPosts";
import Advertise from "../components/Advertise/Advertise";

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

            </Row>
            <Row>

            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;