import {synth, synth2, delay, reverb} from './Synth.js';

const parameters = [
    {data:{key: 1,param: delay.delayTime, name: "Delay Time", step: "0.01", type: 'value'}},
    {data:{key: 2,param: delay.feedback, name: "Repeat", step: "0.01", type: 'value'}},
    {data:{key: 3,param: delay.wet, name: "Delay Mix", step: "0.01", type: 'value'}},
    {data:{key: 4,param: synth2.envelope, name: "Attack",step : "0.001", type : 'attack'}},
    {data:{key: 5,param: synth2.envelope, name: "Decay",step : "0.001", type : 'decay'}},
    {data:{key: 6,param: synth2, name: "Slide",step : "0.001", type : 'portamento', max: '3'}},
    {data:{key: 7,param: reverb.roomSize, name: "Reverb Size",step : "0.001", type : 'value'}},
    {data:{key: 8,param: reverb.wet, name: "Reverb Mix",step : "0.001", type : 'value'}}
];
export default parameters;