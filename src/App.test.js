import React from 'react';
import ReactDOM from 'react-dom';
import {NorthLightsGreen, NorthLightsRed, NorthLightsYellow}  from './Components/NorthLights';
import {SouthLightsGreen, SouthLightsRed, SouthLightsYellow} from './Components/SouthLights';
import {EastLightsGreen, EastLightsRed, EastLightsYellow} from './Components/EastLights';
import {WestLightsGreen, WestLightsRed, WestLightsYellow} from './Components/WestLights';

/* some test cases todo here for the traffic lights*/
//TODO

//test with short time frame intervals

test('East and West lights should be green', () => {
	ReactDOM.render(<EastLightsGreen />, document.getElementById('lightsEast'));
	ReactDOM.render(<WestLightsGreen />, document.getElementById('lightsEast'));
	var checkEastLights = $("#lightsEast > div").hasClass("green-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("green-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});

test('East and West lights should be yellow', () => {
	ReactDOM.render(<EastLightsYellow />, document.getElementById('lightsEast'));
	ReactDOM.render(<WestLightsYellow />, document.getElementById('lightsEast'));
 	var checkEastLights = $("#lightsEast > div").hasClass("yellow-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("yellow-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});

test('East and West lights should be red', () => {
 	ReactDOM.render(<EastLightsRed />, document.getElementById('lightsEast'));
	ReactDOM.render(<WestLightsRed />, document.getElementById('lightsEast'));
 	var checkEastLights = $("#lightsEast > div").hasClass("red-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("red-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});

test('North and South lights should be green', () => {
 	ReactDOM.render(<NorthLightsGreen />, document.getElementById('lightsNorth'));
	ReactDOM.render(<SouthLightsGreen />, document.getElementById('lightsSouth'));
 	var checkEastLights = $("#lightsEast > div").hasClass("green-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("green-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});

test('North and South lights should be yellow', () => {
 	ReactDOM.render(<NorthLightsYellow />, document.getElementById('lightsNorth'));
	ReactDOM.render(<SouthLightsYellow />, document.getElementById('lightsSouth'));
 	var checkEastLights = $("#lightsEast > div").hasClass("yellow-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("yellow-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});

test('North and South lights should be red', () => {
 	ReactDOM.render(<NorthLightsRed />, document.getElementById('lightsNorth'));
	ReactDOM.render(<SouthLightsRed />, document.getElementById('lightsSouth'));
 	var checkEastLights = $("#lightsEast > div").hasClass("red-light");
	var checkWestLights = $("#lightsaWest > div").hasClass("red-light");
 	expect(checkEastLights).toEqual(true);
 	expect(checkWestLights).toEqual(true);
});


	