import React, {Component} from 'react';
var isPlaying = false;
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
  var notesIndex;
class Scale extends Component{
    contructor(props){
    }
    keyChange(){
        if (!isPlaying){
            notesIndex = 0;
            isPlaying = true;
        }else{
            notesIndex = 1;
            isPlaying = false;
        }
        console.log(notesIndex);
    }
    render(){
        return(
            <div>
            <h1>SCALE</h1>
            <li><Link to="/params">Parameters</Link></li>
                <li><Link to="/info">Notes</Link></li>
            </div>
        );   
    }
}
export {Scale, isPlaying, notesIndex};