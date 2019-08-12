import React, { Component } from 'react';
import './../App.css';

import HateList from "./HateList";
import NewHate from "./NewHate";

export default class App extends Component {
  state = {
    hates: [{
        rage: "Improper use of semicolons"
      }, {
        rage: "Improper use of spacing"
      }, {
        rage: "Spelling errors"
      }, {
        rage: "Improper padding"
      }, {
        rage: "No CSS"
      }, {
        rage: "Readability off the rails"
      }, {
        rage: "My app is crap"
      }, {
        rage: "React 'handle' function convention"
      },
    ]
  }

  addNewHate = (newHate) => {
    this.setState({ hates: [...this.state.hates, newHate], });
  }

  render() {
    return (
      <div className="app">
      <h1>Reasons why Kyle hates my code/app</h1>
        <HateList hates={this.state.hates} />
        <NewHate addNewHate={this.addNewHate} />
      </div>
    );
  }
}