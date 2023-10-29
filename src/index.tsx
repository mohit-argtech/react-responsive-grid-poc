import * as React from "react";
import { render } from "react-dom";
import { Badge, Icon } from "antd";
import "antd/dist/antd.css";
import Chart1 from "./Chart";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Canvas from "./Canvas";

class App extends React.Component {
	render() {
		return (
			<div>
				Badge with react node
				{/* <Chart1 />
				<Chart2 />
				<Chart3 /> */}
				<Canvas />
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
