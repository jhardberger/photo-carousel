import React, { Component } from 'react';
import Firebase from './Firebase';
import './App.css';

import WelcomeModal from './WelcomeModal';
import PhotoModal   from './PhotoModal';
import Display      from './Display';

const db = Firebase.firestore();

class App extends Component {
  constructor(){
    super();
    this.state = {
      showModal: true,
      showPhoto: false,
      photos: [],
      currentDisplay: null,
    };
    this.renderPhotos    = this.renderPhotos.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.displayPhoto    = this.displayPhoto.bind(this);
    this.hidePhoto       = this.hidePhoto.bind(this);
  }

  handleShowModal(){
    this.setState({ showModal: !this.state.showModal });
  }

  displayPhoto(e){
    const photoURL = e.target.src; 

    const clickedPhoto = this.state.photos.filter(photo => photo.url === photoURL);
    console.log(clickedPhoto[0]);
    this.setState({
      currentDisplay: clickedPhoto[0],
      showPhoto: true
    });
  }

  hidePhoto(){
    this.setState({
      currentDisplay: null,
      showPhoto: false
    })
  }


  renderPhotos(){
    let newState = []

    db.collection('photos').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        newState.push(doc.data());
      });
    });
    console.log(newState);
    this.setState({
      photos: newState
    })
  }

  componentDidMount(){
    this.renderPhotos();
  };

  render() {

    return (
      <div className="App">

        <WelcomeModal 
          showModal={this.state.showModal} 
          handleShowModal={this.handleShowModal}
        />

        <PhotoModal
          currentDisplay={this.state.currentDisplay}
          showPhoto={this.state.showPhoto}

          hidePhoto={this.hidePhoto}
        />
        
        <Display 
          photos={this.state.photos}
          
          displayPhoto={this.displayPhoto}
          hidePhoto={this.hidePhoto} 
        />
        
      </div>    
    );
  }
}

export default App;