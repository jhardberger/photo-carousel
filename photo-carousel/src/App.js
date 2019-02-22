import React, { Component } from 'react';
import Firebase from './Firebase';
import './App.css';

import WelcomeModal from './WelcomeModal';
import Display      from './Display';

const db = Firebase.firestore();

class App extends Component {
  constructor(){
    super();
    this.state = {
      showModal: true,
      photos: []
    };
    this.renderPhotos    = this.renderPhotos.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleShowModal(){
    this.setState({ showModal: !this.state.showModal });
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
        
        <Display 
          photos={this.state.photos} 
        />
        
      </div>    
    );
  }
}

export default App;