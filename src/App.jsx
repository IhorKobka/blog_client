import React, {Component, Fragment} from 'react';
import './App.css';
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <HomeContainer/>
      </Fragment>
    );
  }
}

export default App;
