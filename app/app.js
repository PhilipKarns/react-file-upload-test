// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Include the Main Component
import Main from "./components/Main";
// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

ReactDOM.render(<Main />  , document.getElementById("app"));