import React, { Component } from 'react';
import Layout from './hoc/Layout/layout';
import { Route, Switch } from 'react-router-dom'
import Music from './containers/Music/Music';
import Auth from './containers/Auth/Auth';
import Registrate from './containers/Registrate/Registrate'
import MyMusic from './containers/MyMusic/MyMusic';
import withAuth from './hoc/withAuth/withAuth';
import MyProfile from './containers/MyProfile/MyProfile';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/login" component={Auth}/>
          <Route path="/registrate" component={Registrate}/>
          <Route path="/mymusic" component={withAuth(MyMusic)}/>
          <Route path="/myprofile" component={withAuth(MyProfile)}/>
          <Route path="/" component={withAuth(Music)}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
