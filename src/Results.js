import React, { Component } from 'react';
import './App.scss';
import './Main.scss';
import './Results.scss';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            animals: [],
        };
    }

    componentDidMount() {
        var url = "https://test1-api.rescuegroups.org/v5/public/animals/search/available/dogs?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls&fields[animals]=name,sex&fields[orgs]=name,email,url,facebookUrl,adoptionUrl&fields[breeds]=name&fields[colors]=name&fields[fosters]=name,email&fields[locations]=name&fields[patterns]=name&fields[pictures]=large,small&fields[species]=singular&fields[videos]=url&fields[videourls]=url,urlThumbnail&options=meta&limit=10";
        const API_KEY = process.env.REACT_APP_API_KEY;

        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(response => this.setState({animals: response.data}))
    }
    
    render() {
        console.log(this.state);
        return (

            <div className="results-container">
                {this.state.animals.map(animal => <div className="pet-attribute" key={animal.id}>{animal.attributes.name.toString()}</div>)}
                {this.state.animals.map(animal => <div key={animal.id}>{animal.attributes.sex}</div>)}
                {this.state.animals.map(animal => <div key={animal.id}>{animal.relationships.pictures.data
                    .map(picture => <div key={picture.id}>{picture.type.toString()}</div>)}
                </div>)}
            </div>

        )
    }
}

export default Results;