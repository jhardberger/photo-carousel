import React, { Component } from 'react';
import Firebase from './Firebase';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      url: '',
      title: ''
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
    const db = Firebase.firestore();
    const photoRef = db.collection('photos').add({
      url: this.state.url,
      title: this.state.title
    });

    this.setState({
      url: '',
      title: ''
    });
  }; 

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>

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
    );
  }
}

export default App;
