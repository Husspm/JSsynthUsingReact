import React, { Component } from 'react';
import Line from './Lines.js';
import Header from './Header.js';
import '../styles/App.css';
let data = {title: "One", text: "SomeText", version: "1.0"};
import Tone from 'tone';
var notes_array = ["C4", "E4", "G4", "B3", "D4", "G3"];
var delay = new Tone.PingPongDelay(0.5, 0.75).toMaster();
var synth = new Tone.Synth({
    oscillator: {
    type: "square8"
    },
    envelope : {
        attack: 0.1,
        decay: 0.1, 
        sustain: 0.8, 
        release: 0.1
    }
}).connect(delay);
synth.volume.value = 1;
var noteIndex = 0;
Tone.Transport.start();
class App extends Component {
    // super(this){};
    constructor(){
    super();
    this.state = {wet: 0.4}
    }
    playNote (){
        synth.volume.input.value = Math.max(Math.random(), 0.5);
        synth.triggerAttackRelease(notes_array[noteIndex], "16n");
        this.increaseNote();
    }
    increaseNote(){
        noteIndex++;
        if(noteIndex >= notes_array.length){
            noteIndex = 0;
        }
    }
    controlWet(e){
        delay.delayTime.value = e.target.value;
        delay.wet.value = e.target.value;
    }
    componentDidMount(){
        this.interval = setInterval(() => this.playNote(), 1000);
    }
    render() {
        return ( 
            <div>
                <div className="textHeader">
                <label htmlFor = "delayTime">Delay Time</label>
                <input id = 'delayTime' 
                className = 'slider' type='range' 
                min = '0.1' max = '1' step = '0.001' defaultValue = {delay.delayTime.value}
                onChange={this.controlWet}/>
                </div>
            </div>
        );
    }
}

export default App;