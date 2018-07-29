import React, { Component } from 'react';
import Line from './Lines.js';
import Header from './Header.js';
import {Scale, isMinor, newTime} from './Scale.js';
import '../styles/App.css';
let data = {param: delay.feedback};
import Tone from 'tone';
import {synth, synth2, delay, notes_array, minorNotes, msTime} from './Synth.js';
var noteIndex = 0;
var arrIndex = 0;
var currArray = notes_array[arrIndex];
// Tone.Transport.start();
Tone.Transport.loop = true;
Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "4m";
var time = msTime;
class App extends Component {

    playNote (){
        synth.volume.input.value = Math.max(Math.random(), 0.8);
        synth2.volume.input.value = Math.max(Math.random(), 0.7);
        // synth.triggerAttackRelease(notes_array[noteIndex], "16n");
        synth2.triggerAttackRelease(currArray[noteIndex], "4n");
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
    controlWet(e){
        delay.delayTime.value = e.target.value;
    }
    setTime(){
        this.interval = clearInterval(this.interval);
        this.interval = setInterval(() => this.playNote(), time);
    }
    componentDidMount(){
        this.setTime();
    }
    // <Scale className = "textHeader" />
    render() {
        return ( 
            <div>
                <div className="textHeader">
                    <Line data = {{'param': delay.delayTime, 'name': "Delay Time", 
                'step' : "0.01", 'type' : 1}}/>
                    <Line data = {{'param': delay.feedback, 'name': "Repeat", 
                'step' : "0.01", 'type' : 1}}/>
                    <Line data = {{'param': delay.wet, 'name': "Mix", 
                'step' : "0.001", 'type' : 1}}/>
                    <Line data = {{'param': synth2.envelope, 'name': "Attack", 
                'step' : "0.001", 'type' : 'attack'}}/>
                <Line data = {{'param': synth2.envelope, 'name': "Decay", 
                'step' : "0.001", 'type' : 'decay'}}/>
                </div>
            </div>
        );
    }
}

export default App;