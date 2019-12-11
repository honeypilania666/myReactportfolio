
import React, { Component } from 'react';
import Header from './Header';

export default class Jokes extends Component {
    state = {joke:{}, jokes:[] };
    

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res=>res.json())
        .then(json=>this.setState({joke:json}))
        .catch(error=>alert(error.message));
    }
    
    render() {
        const {setup, punchline} = this.state.joke;

        return (
            <div>
            <Header />
                <h2>Highlighted Jokes!</h2>
               <p>{setup} <em>{punchline}</em></p>
                <hr/>
                <h4>Want Ten New Jokes</h4>       
                <button className="btn btn info justify-content-center">Click me</button>
            </div>
        )
    }
}
