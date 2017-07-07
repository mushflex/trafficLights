import React, { Component } from 'react';
import '../Styles/components.css';

export class WestLightsGreen extends Component {
  render() {
    return (
      <div className="green-light">
        <div className="flex-row lights-ew">
          <span className="circle green"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

export class WestLightsRed extends Component {
  render() {
    return (
      <div className="red-light">
        <div className="flex-row lights-ew">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle red"></span>
        </div>
      </div>
    );
  }
}

export class WestLightsYellow extends Component {
  render() {
    return (
      <div className="yellow-light">
        <div className="flex-row lights-ew">
          <span className="circle"></span>
          <span className="circle yellow"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}