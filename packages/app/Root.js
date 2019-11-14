import React from "react";
import { hot } from "react-hot-loader/root";
import CountButton from "./CountButton";

const Root = () => (
  <div>
    <CountButton />
    <div> This is the component div! </div>
  </div>
);
export default hot(Root);
