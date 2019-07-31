import React, {Fragment, useEffect} from 'react';
import './App.css';
import { useObserver } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import AppStore from './stores/app-store';
import HomePageStore from './stores/home-page-store';

const appStore = new AppStore();
const homePageStore = new HomePageStore();

function App() {
  useEffect(
    () => {
      appStore.fetchCategories();
      appStore.fetchTags();
    },
    []
  );

  return useObserver(() =>
    <Fragment>
      <HeaderContainer categories={appStore.categories} />
      <HomeContainer store={homePageStore}
                     categories={appStore.categories}
                     tags={appStore.tags}
      />
    </Fragment>
  );
}

export default App;
