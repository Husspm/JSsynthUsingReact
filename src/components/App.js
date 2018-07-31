import React, { Component } from 'react';
import Line from './Lines.js';
import Header from './Header.js';
import {Scale, isMinor, newTime} from './Scale.js';
import '../styles/App.css';
import Tone from 'tone';
import {synth, synth2, delay, notes_array, minorNotes, msTime} from './Synth.js';
import parameters from './Parameters.js';
var noteIndex = 0;
var arrIndex = 0;
var currArray = notes_array[arrIndex];
Tone.Transport.start();
Tone.Transport.bpm.value = 120;
Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "4m";
var time = msTime;
var sliders;
class App extends Component {

    playNote (){
        synth.volume.input.value = Math.max(Math.random(), 0.8);
        synth2.volume.input.value = Math.max(Math.random() * 3, 0.7);
        // synth.triggerAttackRelease(currArray[noteIndex], "8n");
        synth2.triggerAttackRelease(currArray[noteIndex], "1n");
        this.increaseNote();
    }
    increaseNote(){
        if (isMinor){
            currArray = minorNotes;
        }
        noteIndex++;
        if(noteIndex >= currArray.length){
            arrIndex++;
            if ( arrIndex >= notes_array.length){
                console.log(arrIndex);
                arrIndex = 0;
            }if (!isMinor){
            currArray = notes_array[arrIndex];
            }
            noteIndex = 0;
        }
    }
    setTime(){
        this.interval = clearInterval(this.interval);
        this.interval = setInterval(() => this.playNote(), time);
    }
    componentDidMount(){
        this.setTime();
        this.renderSliders();
    }
    renderSliders(){
        sliders = parameters.map((parameter) =>
        <Line data = {parameter.data} />
    );
    }
    render() {
        return ( 
            <div>
                <Scale className = "textHeader" />
                <div className="textHeader">
                {sliders = parameters.map((parameter) =>
                <Line key = {parameter.data.key} data = {parameter.data} />
                )}
                </div>
            </div>
        );
    }
}
export default App;