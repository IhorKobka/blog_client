import React, {Component, Fragment} from 'react';
import RecentPostsList from "../components/RecentPostsList/RecentPostsList";

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
      <Fragment>
        <RecentPostsList posts={this.state.posts}/>
      </Fragment>
    );
  }
}

export default HomeContainer;