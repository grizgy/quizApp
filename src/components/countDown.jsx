import React, { Component } from 'react';
import './countDown.css';

class countDown extends Component {
    state = {  } 
    render() { 
        return (

    <div class="countdown">
        <svg viewBox="-50 -50 100 100" stroke-width="5">
            <circle r="20"></circle>
            {/* <circle r="15" stroke-dasharray="282.7433388230814" stroke-dashoffset="282.7433388230814px"></circle> */}
            <circle r="20" stroke-dasharray="125" stroke-dashoffset="125px"></circle>
        </svg>
    </div>

        );
    }
}
 
export default countDown;