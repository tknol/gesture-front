import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Images from './components/Images/Images';
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

  constructor() {
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin',
        isSignedIn: true,
        user: {
          id: '',
          name: '',
          email: '',
          entries: 0,
          joined: ''
        }
      }
    }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    email: data.email
  }})
}

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    //let fragment = '<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />';

    if(route === 'images') {
      return (
        <div>
          <NavBar onRouteChange={this.onRouteChange} />
          <Images />
        </div>
      );
    }

    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <NavBar onRouteChange={this.onRouteChange} />

            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
