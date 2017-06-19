// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Main Component
var Main = require("./components/Main");
// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

ReactDOM.render(<Main />  , document.getElementById("app"));