import React, { Component } from 'react';
import '../Styles/components.css';

export class EastLightsGreen extends Component {
  render() {
    return (
      <div className="green-light">
        <div className="flex-row lights-ew">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle green"></span>
        </div>
      </div>
    );
  }
}

export class EastLightsRed extends Component {
  render() {
    return (
      <div className="red-light">
        <div className="flex-row lights-ew">
          <span className="circle red"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

export class EastLightsYellow extends Component {
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
