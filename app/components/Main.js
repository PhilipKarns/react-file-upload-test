//dependencies
import React, { Component } from "react";

var Form = require("./children/Form");
import GoogleMap from "./google_map";

var Main = React.createClass({
	getInitialState: function() {
		return {
			image: "",
			imagePreviewURL: "",
		}
	},
	setTerm: function(formImage) {
		this.setState({
			image: formImage
		});
	},
	setImage: function(imageURL) {
		this.setState({
			imagePreviewURL: imageURL
		});
	},
	componentDidMount: function() {
 
	},
	render: function() {
		return(
		<div className="container">
	        <div className="row">
				<div className="jumbotron">
					<h2 className="text-center">Picture Upload</h2>
					<p className="text-center">Take or select a picture from your collection</p>
	          	</div>{/*jumbotron*/}
	          	<div className="col-md-12" id="map">
	          		{/*need to figure out what map state will be and how it should be updated*/}
	          		<GoogleMap lng={-81.317845} lat={28.758883} />
	          	</div>
				<div className="col-md-12">
					{/*This will be the code we pass to the form Component*/}						
					<Form setTerm={this.setTerm} />
				</div>
				<div>
					{/*probably need to create image component*/}
					{/*<Form setImage={this.setImage} />*/}
				</div>
			</div>
		</div>
		);//return
	}//render
});//main

//export the file to be used by app.js
module.exports = Main;

