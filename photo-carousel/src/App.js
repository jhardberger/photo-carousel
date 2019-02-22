import React, { Component } from 'react';
import Firebase from './Firebase';
import './App.css';

import Display from './Display';

const db = Firebase.firestore();

class App extends Component {
  constructor(){
    super();
    this.state = {
      url: '',
      title: '',
      photos: []
    };
  }

  updateInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPhoto = (e) => {
    e.preventDefault();
    db.collection('photos').add({
      url: this.state.url,
      title: this.state.title
    });

    this.setState({
      url: '',
      title: ''
    });
  }; 

  componentDidMount(){

    let newState = []

    db.collection('photos').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        newState.push(doc.data());
      });
    });
    console.log(newState);
    this.setState({
      photos: newState
    })
  };

  render() {
    return (
      <div className="App">
        <Display photos={this.state.photos} />
        <div className='input'>
          <h1>new photos here, baby</h1>

          <div className='form'>
            <form onSubmit={this.addPhoto}> 
              <input 
                type='text' 
                name='url' 
                placeholder='Photo URL'
                onChange={this.updateInput} 
                value={this.state.url}
              />
              <input 
                type='text' 
                name='title' 
                placeholder='Photo title' 
                onChange={this.updateInput}
                value={this.state.title} 
              />
              <button type='submit'>Submit</button>
            </form>
          </div>  
        </div>
      </div>    
    );
  }
}

export default App;
