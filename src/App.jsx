import React, {Component, Fragment} from 'react';
import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import HomePageStore from './stores/home-page-store';

const homePageStore = new HomePageStore();

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <HomeContainer store={homePageStore}/>
      </Fragment>
    );
  }
}

export default App;
