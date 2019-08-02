import React, {useEffect} from 'react';
import './App.css';
import { useObserver } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import PostsByCategoryContainer from "./containers/PostsByCategoryContainer";
import PostDetailsContainer from "./containers/PostDetailsContainer";

import AppStore from './stores/app-store';

const appStore = new AppStore();

function App() {
  useEffect(
    () => {
      appStore.fetchCategories();
      appStore.fetchTags();
      appStore.fetchMostReadPosts();
    },
    []
  );

  return useObserver(() =>
    <Router>
      <HeaderContainer categories={appStore.categories} />
      <Switch>
        <Route exact path="/" render={(props) =>
          <HomeContainer {...props} appStore={appStore}/>
        }/>
        <Route path='/posts_by_category/:id' render={(props) =>
          <PostsByCategoryContainer {...props} appStore={appStore}/>
        }/>
        <Route path='/posts/:id' render={(props) =>
          <PostDetailsContainer {...props} appStore={appStore}/>
        }/>
      </Switch>
    </Router>
  );
}

export default App;
