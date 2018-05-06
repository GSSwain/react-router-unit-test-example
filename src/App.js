import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from './Header';
import './App.css';
import MyHttpService from "./MyHttpService";

class App extends Component {
  myHttpService= new MyHttpService();
  state = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.myHttpService.getUser().then(response => {
      if (response.user !== null) {
        this.setState({ user: response.user });
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header headerString='Welcome' />
        <p className="App-intro">
          { this.state.user 
            &&  `User is : ${this.state.user}`   || 'No user yet!'}
        </p>
      </div>
    );
  }
}
//This is required if we want the router specific properties in the props
export default withRouter(App);
