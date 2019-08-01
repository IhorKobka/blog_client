import React, {useEffect} from 'react';
import './App.css';
import { useObserver } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import PostsByCategoryContainer from "./containers/PostsByCategoryContainer";

import AppStore from './stores/app-store';
import HomePageStore from './stores/home-page-store';
import CategoryPostsStore from "./stores/category-posts-store";

const appStore = new AppStore();
const homePageStore = new HomePageStore();
const categoryPostsStore = new CategoryPostsStore();

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
        <Route exact path="/"
               render={(props) =>
                 <HomeContainer {...props}
                                appStore={appStore}
                                store={homePageStore}
                                />
               }
        />
        <Route path='/posts_by_category/:id'
               render={(props) =>
                 <PostsByCategoryContainer {...props}
                                           appStore={appStore}
                                           store={categoryPostsStore}
                                           />
               } />
      </Switch>
    </Router>
  );
}

export default App;
