import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'

const ParticleOptions = {
  particles: {
    "number": {
      "value": 100,
      "size": {
        "value": 20
      },
      "density":{
        "enable":true,
        value_area: 300
      }
    }
  }
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <Particles 
        params={ParticleOptions}
        className="Particles"
        />
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
