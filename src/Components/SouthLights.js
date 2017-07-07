import React, { Component } from 'react';
import '../Styles/components.css';

export class SouthLightsGreen extends Component {
  render() {
    return (
      <div className="green-light">
        <div className="flex-col lights-ns">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle green"></span>
        </div>
      </div>
    );
  }
}

export class SouthLightsRed extends Component {
  render() {
    return (
      <div className="red-light">
        <div className="flex-col lights-ns">
          <span className="circle red"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  }
}

export class SouthLightsYellow extends Component {
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
