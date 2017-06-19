//dependencies
var React = require("react");

var Form = require("./children/Form");

var Main = React.createClass({
	getInitialState: function() {
		return {
			image: "",
		}
	},
	setTerm: function(formImage) {
		this.setState({
			image: formImage
		});
	},
	render: function() {
		return(
		<div className="container">
	        <div className="row">
				<div className="jumbotron">
					<h2 className="text-center">Picture Upload</h2>
					<p className="text-center">Take or select a picture from your collection</p>
	          	</div>{/*jumbotron*/}

				<div className="col-md-6">
					{/*This will be the code we pass to the form Component*/}						
					<Form setTerm={this.setTerm} />
				</div>
			</div>
		</div>
		);//return
	}//render
});//main

//export the file to be used by app.js
module.exports = Main;

