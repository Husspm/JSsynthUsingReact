import Tone from 'tone';
var msTime = 1500;
var notes_array = [
    ["C4", "E4", "G4", "B3", "D4", "G3", "A3", "C3"],
    ["E3", "D4", "A5", "G5", "C3", "A2", "G2", "A3"]
];
var minorNotes = ["C3", "D#3", "G3", "A3", "A#3"];
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
var synth2 = new Tone.Synth({
    oscillator: {
    type: "triangle4"
    },
    envelope : {
        attack: 0.81,
        decay: 0.1, 
        sustain: 0.18, 
        release: 0.51
    }
}).connect(delay);
Tone.Transport.start();
export {synth, synth2, delay, notes_array, minorNotes, msTime};