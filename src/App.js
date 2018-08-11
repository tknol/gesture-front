import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Logo from './components/Logo/Logo';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'API_KEY'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <div><Logo /></div>
      </div>
    );
  }
}

export default App;
