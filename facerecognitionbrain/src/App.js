import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'

class App extends React.Component {

  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Logo />
        {/* <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;