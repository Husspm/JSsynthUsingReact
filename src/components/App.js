import React, { Component } from 'react';
import Line from './Lines.js';
import Header from './Header.js';
import {Scale} from './Scale.js';
import Note from './Note.js';
import '../styles/App.css';
import Tone from 'tone';
import {synth, synth2, delay, notes_array, minorNotes, msTime} from './Synth.js';
import parameters from './Parameters.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
var noteIndex = 0;
var arrIndex = 0;
var currArray = notes_array[arrIndex];
var time = msTime;
var sliders;

class App extends Component {
    constructor(){
        super();
        this.state = {isPlaying:false};
    }
    playNote (e){
        console.log(e.key);
        synth.volume.input.value = Math.max(Math.random(), 0.8);
        synth2.volume.input.value = Math.max(Math.random(), 0.3);
        // synth.triggerAttackRelease(
        //     Tone.Midi(currArray[noteIndex]).toFrequency(),
        //      "8n");
        synth2.triggerAttack(
            Tone.Midi(currArray[noteIndex]).toFrequency());
        this.increaseNote();
    }
    endNote (){
        synth2.triggerRelease();
    }
    increaseNote(){
        noteIndex++;
        if(noteIndex >= currArray.length){
            arrIndex++;
            if ( arrIndex >= notes_array.length){
                console.log(arrIndex);
                arrIndex = 0;
            }
            currArray = notes_array[arrIndex];
            noteIndex = 0;
        }
    }
    recieveClick(e){
        console.log(e.pageX);
        // this.setState(prevState => ({
        //     isPlaying: !prevState.isPlaying
        // }));
        // console.log("isPlaying = ",this.state.isPlaying);
        // this.setTime(this.state.isPlaying);
    }
    setTime(isPlaying){
        if (!isPlaying){
            this.interval = clearInterval(this.interval);
            // this.interval = setInterval(() => this.playNote(), time);
        }else{
            this.interval = clearInterval(this.interval);
        }
        
    }
    componentDidMount(){
        this.setTime(this.state.isPlaying);
    }
    render() {
        return ( 
        <Router>
            <div className = 'mainBody'>
                <Scale className = "textHeader" />
                <Route path = "/params" render = { () => {
                return(
                <div className="textHeader">
                {parameters.map((parameter) =>
                <Line key = {parameter.data.key} data = {parameter.data} />
                )}
                </div>
            );}}/>
                <Route path = '/info' render = { () => {
                    return(
                    <div onMouseDown={this.recieveClick.bind(this)}>
                    {notes_array[0].map((number) => 
                    <Note key = {number} noteNumber = {number} delay={delay}
                    synth = {synth2}/>
                    )}
                    </div>
                    );
                }}/> 
            </div>
        </Router>
        );
    }
}
export default App;