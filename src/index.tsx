import * as React from "react";
import * as ReactDOM from "react-dom";

import { Aviasales } from "./components/Aviasales";

ReactDOM.render(
    <Aviasales compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);