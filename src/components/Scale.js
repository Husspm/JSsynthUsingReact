import React, {Component} from 'react';
var isMinor = false;
var newTime;
class Scale extends Component{
    keyChange(){
        if (!isMinor){
        isMinor = true;
        newTime = 250;
        }else{
            isMinor = false;
        }
    }
    render(){
        return(
            <div>
            <h1>SCALE</h1>
            <button onClick = {this.keyChange}>Change</button>
            </div>
        );   
    }
}
export {Scale, isMinor, newTime};