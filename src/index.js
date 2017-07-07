import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
//import {GreenLightEW, RedLightEW, YellowLightEW, GreenLightNS, RedLightNS, YellowLightNS} from './App';

import {NorthLightsGreen, NorthLightsRed, NorthLightsYellow}  from './Components/NorthLights';
import {SouthLightsGreen, SouthLightsRed, SouthLightsYellow} from './Components/SouthLights';
import {EastLightsGreen, EastLightsRed, EastLightsYellow} from './Components/EastLights';
import {WestLightsGreen, WestLightsRed, WestLightsYellow} from './Components/WestLights';

import registerServiceWorker from './registerServiceWorker';


//define the traffic lights with 2 perspectives instead of four components
var objlightsNorthSouth = {
	position: "NS",
	green: true,
	yellow: false,
	red: false
}

var objLightsEastWest = {
	position: "EW",
	green: false,
	yellow: false,
	red: false
}

var fiveMinuetes = 5000*60*60; 
var thirtySecs = 1000*30; 

//test with short time intervals
//var fiveMinuetes = 1000*10; //10 secs
//var thirtySecs = 1000*5; //5 secs

/*
* Start the traffic lights app, initially traffic is flowing north south
*/
ReactDOM.render(<NorthLightsGreen />, document.getElementById('lightsNorth'));
ReactDOM.render(<SouthLightsGreen />, document.getElementById('lightsSouth'));
ReactDOM.render(<EastLightsRed />, document.getElementById('lightsEast'));	
ReactDOM.render(<WestLightsRed />, document.getElementById('lightsWest'));
lightsTimer(fiveMinuetes, true, objlightsNorthSouth);


/*
* Lights Timer 
* 	timer to wait for 5 mins or 30 secs and then change the traffic lights
* 	
*/
function lightsTimer(intTime, blnRunYellow, objLights) {
	//console.log("lightsTimer: ", intTime, blnRunYellow, objLights);

    setTimeout(function(){ 
    	//console.log("inside timeout: ", objLights, blnRunYellow)
    	if(blnRunYellow){
    		objLights.green = false;
    		objLights.yellow = true;
    		if(objLights.position === "NS") {
    			ReactDOM.render(<NorthLightsYellow />, document.getElementById('lightsNorth'));	
    			ReactDOM.render(<SouthLightsYellow />, document.getElementById('lightsSouth'));
    		}else{
    			ReactDOM.render(<EastLightsYellow />, document.getElementById('lightsEast'));	
    			ReactDOM.render(<WestLightsYellow />, document.getElementById('lightsWest'));
    		}

    		lightsTimer(thirtySecs,false,objLights);
    	}else{
    		switchLights();
    	}
    		
	}, intTime);

}

/*
* Switch Lights
* 	switch the corresponding lights to green and start a new timer
*/
function switchLights() {
	//console.log("switchLights", );
	if(objlightsNorthSouth.yellow){
		objlightsNorthSouth.yellow = false;
    	objlightsNorthSouth.red = true;
		ReactDOM.render(<NorthLightsRed />, document.getElementById('lightsNorth'));	
    	ReactDOM.render(<SouthLightsRed />, document.getElementById('lightsSouth'));

	 	objLightsEastWest.green = true;
	 	ReactDOM.render(<EastLightsGreen />, document.getElementById('lightsEast'));
	 	ReactDOM.render(<WestLightsGreen />, document.getElementById('lightsWest'));
	 	lightsTimer(fiveMinuetes, true, objLightsEastWest);
	}else if(objLightsEastWest.yellow){

		objLightsEastWest.yellow = false;
    	objLightsEastWest.red = true;
		ReactDOM.render(<EastLightsRed />, document.getElementById('lightsEast'));	
    	ReactDOM.render(<WestLightsRed />, document.getElementById('lightsWest'));

	 	objlightsNorthSouth.green = true;
	 	ReactDOM.render(<NorthLightsGreen />, document.getElementById('lightsNorth'));
	 	ReactDOM.render(<SouthLightsGreen />, document.getElementById('lightsSouth'));
	 	lightsTimer(fiveMinuetes, true, objlightsNorthSouth);
	}
}

registerServiceWorker();

