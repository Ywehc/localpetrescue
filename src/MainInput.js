import React, { Component } from 'react';
import './App.scss';
import './Main.scss';

class MainInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Postal code submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    <input 
                        className="postalInput"
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder="Postal/Zip Code"/>
                </label>
                <br></br>
                <input 
                    className="submitButton"
                    type="submit" 
                    value="Show me dogs!" />
            </form>

        )
    }
}

export default MainInput;