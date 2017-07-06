import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GreenLightEW, RedLightEW, YellowLightEW, GreenLightNS, RedLightNS, YellowLightNS} from './App';
import registerServiceWorker from './registerServiceWorker';


//define the traffic lights
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

var fiveMinuetes = 1000*10;//5000*60*60; 
var thirtySecs = 1000*5//1000*30;

/*
* Start the traffic lights app, initially traffic is flowing north south
*/
ReactDOM.render(<GreenLightNS />, document.getElementById('lightsNorth'));
ReactDOM.render(<GreenLightNS />, document.getElementById('lightsSouth'));
ReactDOM.render(<RedLightEW />, document.getElementById('lightsEast'));	
ReactDOM.render(<RedLightEW />, document.getElementById('lightsWest'));
lightsTimer(fiveMinuetes, true, objlightsNorthSouth);


/*
* Lights Timer 
* 	timer to wait for 5 mins or 30 secs and then change the traffic lights
* 	
*/
function lightsTimer(intTime, blnRunYellow, objLights) {
	console.log("lightsTimer: ", intTime, blnRunYellow, objLights);

    setTimeout(function(){ 
    	console.log("inside timeout: ", objLights, blnRunYellow)
    	if(blnRunYellow){
    		objLights.green = false;
    		objLights.yellow = true;
    		if(objLights.position === "NS") {
    			ReactDOM.render(<YellowLightNS />, document.getElementById('lightsNorth'));	
    			ReactDOM.render(<YellowLightNS />, document.getElementById('lightsSouth'));
    		}else{
    			ReactDOM.render(<YellowLightEW />, document.getElementById('lightsEast'));	
    			ReactDOM.render(<YellowLightEW />, document.getElementById('lightsWest'));
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
	console.log("switchLights", );
	if(objlightsNorthSouth.yellow){
		objlightsNorthSouth.yellow = false;
    	objlightsNorthSouth.red = true;
		ReactDOM.render(<RedLightNS />, document.getElementById('lightsNorth'));	
    	ReactDOM.render(<RedLightNS />, document.getElementById('lightsSouth'));

	 	objLightsEastWest.green = true;
	 	ReactDOM.render(<GreenLightEW />, document.getElementById('lightsEast'));
	 	ReactDOM.render(<GreenLightEW />, document.getElementById('lightsWest'));
	 	lightsTimer(fiveMinuetes, true, objLightsEastWest);
	}else if(objLightsEastWest.yellow){

		objLightsEastWest.yellow = false;
    	objLightsEastWest.red = true;
		ReactDOM.render(<RedLightEW />, document.getElementById('lightsEast'));	
    	ReactDOM.render(<RedLightEW />, document.getElementById('lightsWest'));

	 	objlightsNorthSouth.green = true;
	 	ReactDOM.render(<GreenLightNS />, document.getElementById('lightsNorth'));
	 	ReactDOM.render(<GreenLightNS />, document.getElementById('lightsSouth'));
	 	lightsTimer(fiveMinuetes, true, objlightsNorthSouth);
	}
}

registerServiceWorker();

