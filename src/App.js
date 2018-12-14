import React, { Component } from 'react';
import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './helpers/loaders.js';
import LevelRender from './containers/LevelRender';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <>
        <LevelRender  />
      </>
    );
  }
}

export default App;
