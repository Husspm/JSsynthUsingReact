import React, { Component } from 'react';
// import {synth, delay, msTime} from './Synth.js';

class Line extends Component {
    constructor(props){
        super(props);
        this.state = props.data;
        this.controlParam.bind(this);
    }
    controlParam(e){
            console.log(this.state.param);
            this.state.param[this.state.type] = e.target.value;
    }
    render(){
    return(
    <div>
        <label htmlFor = {this.state.name}>{this.state.name}</label>
        <input id = {this.state.name} 
        className = 'slider' type='range' 
        min = '0.01' max = '1' step = {this.state.step} defaultValue = {this.state.param[this.state.type]}
        onChange={this.controlParam.bind(this)}/>
        </div>
        )
    }
}
export default Line;