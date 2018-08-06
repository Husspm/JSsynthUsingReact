import Tone from 'tone';
var msTime = 1000;
var notes_array = [
    [60, 62, 63, 65, 67, 69, 70],
    [50, 54, 60, 75, 54]
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
var synth2 = new Tone.FMSynth({
    portamento: 0.15,
    oscillator: {
    type: "sine"
    },
    envelope : {
        attack: 0.81,
        decay: 0.1, 
        sustain: 0.18, 
        release: 0.51
    },
    modulation : {
        type: 'triangle'
    }
}).connect(delay);
var reverb = new Tone.JCReverb(0.5).toMaster();
reverb.preDelay = 0.5;
reverb.wet.value = 0.1;
synth2.connect(reverb);
// Tone.Master.chain(reverb);
Tone.Transport.start();
export {synth, synth2, delay, notes_array, minorNotes, msTime, reverb};