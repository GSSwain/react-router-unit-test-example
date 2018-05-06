import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.headerString}</h1>
      </header>
    );
  }
}