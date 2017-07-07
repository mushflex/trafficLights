import React from 'react';
import ReactDOM from 'react-dom';
import {NorthLightsGreen, NorthLightsRed, NorthLightsYellow}  from './Components/NorthLights';
import {SouthLightsGreen, SouthLightsRed, SouthLightsYellow} from './Components/SouthLights';
import {EastLightsGreen, EastLightsRed, EastLightsYellow} from './Components/EastLights';
import {WestLightsGreen, WestLightsRed, WestLightsYellow} from './Components/WestLights';

/* some test cases todo here for the traffic lights*/

//test east lights 
it('Render East Lights to Green', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EastLightsGreen />, div);
});
it('Render East Lights to Red', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EastLightsRed />, div);
});
it('Render East Lights to Yellow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EastLightsYellow />, div);
});

//test west lights
it('Render West Lights to Green', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WestLightsGreen />, div);
});
it('Render West Lights to Red', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WestLightsRed />, div);
});
it('Render West Lights to Yellow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WestLightsYellow />, div);
});


//test north lights
it('Render North Lights to Green', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NorthLightsGreen />, div);
});
it('Render North Lights to Red', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NorthLightsRed />, div);
});
it('Render North Lights to Yellow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NorthLightsYellow />, div);
});

//test south lights
it('Render South Lights to Green', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SouthLightsGreen />, div);
});
it('Render South Lights to Red', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SouthLightsRed />, div);
});
it('Render South Lights to Yellow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SouthLightsYellow />, div);
});




//how to test with short time frame intervals?



	