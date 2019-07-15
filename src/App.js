import React from 'react';
import './App.css';
import HeaderImage from './assets/g-dino.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Profiles from './components/Profiles';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      DinoProfiles: []
    }
  }

  getProfileData = () => {
    fetch('./dinosaurs.json')
      .then(response => response.json())
      .then(resJSON => {
        this.setState({
          DinoProfiles: resJSON
        })
      })
  }

  componentDidMount(){
    this.getProfileData();
  }

  render(){
    return (
      <div className="App">
        <Header HeaderImage={HeaderImage}/>
        <Profiles DinoProfiles={this.state.DinoProfiles}/>
        <Footer />
      </div>
    );
  }
}

export default App;
