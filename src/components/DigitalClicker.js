// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

constructor(){
    super();
    this.state = {
        timesClicked: 0
    }
}


    
clicked = () => {
    let count = this.state.timesClicked

     if (this.state.timesClicked === 0) {
         count = 1
     }else {
        count ++
     } 

    console.log(this.state.timesClicked)
     
    

    this.setState({timesClicked: count})

    
    
}

render() {
    return (
        <label value={this.state.timesClicked} text={this.state.timesClicked}>
<button onClick={this.clicked} ></button>
</label>
    )
}
}