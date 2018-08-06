// import delay from './Synth.js';
import React, {Component} from 'react';
import Tone from 'tone';
import '../styles/App.css';

class Note extends Component {
    constructor(props){
        super(props);
        this.state = {noteNumber : props.noteNumber, synth: props.synth.connect(props.delay)};
        this.playNote = this.playNote.bind(this);
        this.scheduleNote = this.scheduleNote.bind(this);
        this.calcTime = this.calcTime.bind(this);
        this.firstPress = this.firstPress.bind(this);
        this.time = 0;
        this.startTime = 0;
    }
    firstPress(){
        this.startTime = performance.now();
        this.playNote();

    }
    calcTime(){
        this.time = Math.abs(this.startTime - performance.now());
        this.scheduleNote();
    }
    scheduleNote(){
        this.interval = clearInterval(this.interval);
        this.interval = setInterval(() => this.playNote(), 2000);
    }
    playNote(){
        // console.log(e.key);
        // synth.volume.input.value = Math.max(Math.random(), 0.8);
        // synth2.volume.input.value = Math.max(Math.random(), 0.3);
        // synth.triggerAttackRelease(
        //     Tone.Midi(currArray[noteIndex]).toFrequency(),
        //      "8n");
        this.state.synth.triggerAttackRelease(
            Tone.Midi(this.state.noteNumber).toFrequency(), 500);
    }
    endNote(){
        this.state.synth.triggerRelease();
        // onMouseUp ={this.endNote}
    }
    render(){
        return (
            <button className = 'header' onMouseDown={this.firstPress}
            onMouseUp = {this.calcTime}>
            {Tone.Frequency(this.state.noteNumber, "midi").toNote()}
            </button>
        );
    }
}

export default Note;