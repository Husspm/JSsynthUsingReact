import React, { Component } from 'react';
import synth from './App.js';

class Line extends Component {
    constructor(props){
        super(props);
        this.state = props.data;
    }
    controlParam(e){
        synth.envelope.attack = e.target.value;
    }
    render(){
    return (
        <div>
        <label htmlFor = "synthAttack">synthAttack</label>
        <input id = 'synthAttack' 
        className = 'slider' type='range' 
        min = '0.1' max = '1' step = '0.1' defaultValue = {synth.envelope.attack}
        onChange={this.controlParam}/>
        </div>
    );
    }
}
export default Line;