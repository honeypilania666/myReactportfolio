  import React, { Component } from 'react';
  import '../App.css';
  import Projects from './Projects';
  import SocialProfiles from './SocialProfiles';
  import profile from '../assets/profile.jpg';
  import Title from './Title';
  import Header from './Header';

  export class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio=()=>{
      this.setState({displayBio : !this.state.displayBio});
    }
  
    render() {
     
      return (
        <div className="App">
        <Header />
        <img src={profile} alt='Profile' className='profile' />

          <h1>Hello</h1>
          <p>My name is Honey Pilania</p>

          <Title />

           <p>I'm always looking forward to working on meaningful projects.</p>

          { this.state.displayBio ? <div>

        <p>I live in Hapur, and code everday.</p>
        <p>My favorite language is Javascript, and I think React.js is awesome.</p>
        <p>Besides coding, I also love music and play Indoor games!</p>

          <button onClick={this.toggleDisplayBio}>Show Less</button>
      </div>: 
      <div><button onClick={this.toggleDisplayBio}>Read More</button></div>
      }<hr />
      
        <Projects />
          <hr />
          <SocialProfiles />
          <hr />
          
        </div>
      );
    }
  

  }

  export default App;
