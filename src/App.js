import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react.js';
import './App.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var CanvasJS = CanvasJSReact.CanvasJS;



export default class App extends Component {
  state = {
    stroomverbruik: '',
    vermogen: '',
    opbrengstpanelen: '',
    directverbruik: ''
  };

  handleChange = (e) => {
    e.preventDefault();
    let val = Number(e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]: val
    });
  };

  render() {
    let { stroomverbruik, vermogen, opbrengstpanelen, directverbruik } = this.state;
	  const options = 
    {
      width:500,
      height: 300,
			animationEnabled: true,
      exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			// title:{
			// 	text: "Rendering energy graph"
			// },
			data: [{
        type: "pie", //change type to bar, line, area, pie, etc		
        startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: true,
				legendText: "{label}",
				indexLabelFontSize: 14,
				indexLabel: "{label} - {y}%",		
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: stroomverbruik, y: stroomverbruik, label: "Stroom Verbruik" },
					{ x: vermogen, y: vermogen, label: "Vermogen" },
					{ x: opbrengstpanelen, y: opbrengstpanelen, label: "Opbrengst Panelen"},
					{ x: directverbruik, y: directverbruik, label: "Direct Verbruik" }
				]
			}]
    };
    
    return (
      <React.Fragment>
      <div className="App">
        <h1 id="title"> Simulation </h1>
        <form>
          <label className="label">Stroom Verbruik</label>
          <input 
          className="inpt"
          name="stroomverbruik"
          type="string"
          value={stroomverbruik}
          onChange={this.handleChange}
          placeholder="Enter a value"
          /><br />
          <label className="label">Vermogen</label>
          <input 
          className="inpt"
          name="vermogen"
          type="string"
          value={vermogen}
          onChange={this.handleChange}
          placeholder="Enter a value"
          /><br />
          <label className="label">Opbrengst Panelen</label>
          <input 
          className="inpt"
          name="opbrengstpanelen"
          type="string"
          value={opbrengstpanelen}
          onChange={this.handleChange}
          placeholder="Enter a value"
          /><br />
          <label className="label">Direct Verbruik</label>
          <input 
          className="inpt"
          name="directverbruik"
          type="string"
          value={directverbruik}
          onChange={this.handleChange}
          placeholder="Enter a value"
          /> 
        <CanvasJSChart options={options}
        onRef={ref => (this.chart = ref)} 
        />
        </form>
        <img id="house" src={require('./images/house.png')} alt="house picture" width="400" height="300"/>
      </div>
      </React.Fragment>
    );
  }
}