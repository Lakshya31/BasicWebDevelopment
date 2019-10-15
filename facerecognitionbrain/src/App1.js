import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import FaceRecognition from './components/facerecognition/FaceRecognition'
import SignIn from './components/signin/SignIn'
import Register from './components/register/Register'

const app = new Clarifai.App({
  apiKey: '9d4a2889a98e44e58c2ba347a7478918'
 }); 

const ParticleOptions = {
  particles: {
    "number": {
      "value": 100,
      "size": {
        "value": 20
      },
      "density":{
        "enable":true,
        value_area: 200
      }
    }
  }
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      input:'',
      imageURL:'',
      box:{},
      route:'signin'
    }
  }

  CalculateFaceLocation = (data) => {
    const Face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const Image = document.getElementById("inputimage");
    const width = Image.width;
    const height = Image.height;

    return{
      leftCol : Face.left_col*width,
      topRow : Face.top_row*height,
      rightCol : width-(Face.right_col*width),
      bottomRow : height-(Face.bottom_row*height)
    }
  }

  DisplayFaceBox = (box) => {
    this.setState({box:box})
  }

  OnInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  OnSubmit = (event) => {

    this.setState({imageURL:this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.DisplayFaceBox(this.CalculateFaceLocation(response)))
      .catch(err=> console.log(err));
  }

  OnRouteChange = (route) => {
    this.setState({route:route})
  }

  render(){
    let constant1 = <Particles params={ParticleOptions} className="Particles" />
    let conditional;

    if(this.state.route === "home"){
      conditional = <div>
        <Navigation OnRouteChange = {this.OnRouteChange} />
        <Logo />
        <Rank/>
        <ImageLinkForm OnInputChange={this.OnInputChange} OnSubmit={this.OnSubmit}/>
        <FaceRecognition box={this.state.box} imageURL = {this.state.imageURL} />
      </div>
    }
    else{
      if(this.state.route === "signin"){
        conditional = <SignIn OnRouteChange={this.OnRouteChange} />
      }
      else{
        conditional = <Register OnRouteChange = {this.OnRouteChange} />
      }
    }
    return (
      <div className="App">
        {constant1}
        {conditional}
      </div>
    );
    }
}

export default App;
