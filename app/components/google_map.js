import React, { Component } from "react";


class GoogleMap extends Component {
	componentDidMount() {
		//this is how we create an embedded google map inside of our document
		//google.maps.Map will take a reference to an html node/element where we want to render the map
		//google maps will find the element on the screen and render an embedded map to it
		//this is how 3rd party libaries are used in React
		//the second argument is an options object, with zoom and center
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lng
			}
		});
	}
	render() {
		//ref allows us to get a reference to an html element that's been rendered to the page
		//anywhere else in the component you can say this.refs.map and get direct reference to the div element below
		return <div ref="map" id="google-map">Loading Map </div>;
	}
}

export default GoogleMap;