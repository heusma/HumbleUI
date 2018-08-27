import React, { Component } from 'react';

class Selector extends Component {
    render() {
        let inline1 = {
            top: (this.props.height/2 - 5 - 9)+'px',
            cursor: 'ew-resize'
        }
        let inline2 = {
            top: (this.props.height/2 - 5 - 2*9)+'px',
            cursor: 'ew-resize'
        }
        let inline3 = {
            top: (this.props.height - 23)+'px',
            cursor: 'nesw-resize'
        }
        let inline4 = {
            top: (this.props.height - 32)+'px',
            cursor: 'nwse-resize'
        }
        let inline5 = {
            marginRight: (this.props.width/2 - 8)+'px',
            cursor: 'ns-resize'
        }
        let inline6 = {
            top: (this.props.height - 32)+'px',
            marginRight: (this.props.width/2 - 8)+'px',
            cursor: 'ns-resize'
        }
        return (  
            <div className="selectCage">
                <div className="selector top-left"></div>  
                <div className="selector top-right"></div> 
                <div className="selector top-right" style={inline5}></div>
                <div className="selector top-left" style={inline1}></div>
                <div className="selector top-right" style={inline2}></div> 
                <div className="selector top-left" style={inline3}></div>
                <div className="selector top-right" style={inline4}></div>
                <div className="selector top-right" style={inline6}></div>
            </div>
        );
    }
}

export default Selector;