import React, { Component } from 'react';
import './App.css';

export class GreenLightEW extends Component {
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

export class RedLightEW extends Component {
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

export class YellowLightEW extends Component {
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

export class GreenLightNS extends Component {
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

export class RedLightNS extends Component {
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

export class YellowLightNS extends Component {
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



