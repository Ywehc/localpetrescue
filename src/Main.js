import React, { Component } from 'react';
import './App.scss';
import './Main.scss';
import Results from './Results.js';
import MainInput from './MainInput.js';

class Main extends Component {
    render() {
        return (
            
            <div>
                <div className="subheading">
                    <h2>Thinking about giving a dog in your area a loving home?</h2>
                    <h2>Start by reviewing <span className="highlight">this checklist</span> to make sure you are ready!</h2>
                </div>
                <div className="main">
                    <h3>Comfortable that you can be a responsible hero to an animal in need? 
                        Enter your Postal or Zip code to see dogs near you that need a friend and home.</h3>
                    <MainInput />                   
                </div>
                <Results />
            </div>
            
        )
    }
}

export default Main;