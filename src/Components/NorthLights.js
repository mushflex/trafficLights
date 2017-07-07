import React, { Component } from 'react';
import '../Styles/components.css';

export class NorthLightsGreen extends Component {
  
  render() {
    return (
      <div className="green-light">
        <div className="flex-col lights-ns">
          <span className="circle green"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

export class NorthLightsRed extends Component {
  
  render() {
    return (
      <div className="red-light">
        <div className="flex-col lights-ns">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle red"></span>
        </div>
      </div>
    );
  }
}


export class NorthLightsYellow extends Component {
  
  render() {
    return (
      <div className="yellow-light">
        <div className="flex-col lights-ns">
          <span className="circle"></span>
          <span className="circle yellow"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

