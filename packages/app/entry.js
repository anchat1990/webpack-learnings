import React from "react";
import ReactDom from "react-dom";
import Root from "./Root";

const el = React.createElement(Root);

ReactDom.render(el, document.getElementById("my-react-app"));
