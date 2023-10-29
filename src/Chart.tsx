import React from "react";
import Plot from "react-plotly.js";
import { Data, Layout } from "plotly.js";

interface ChartProps {
	width: number;
	height: number;
}
const MultiYAxisPlot: React.FC = ({ height, width }: ChartProps) => {
	const trace1: Data = {
		x: [1, 2, 3, 4],
		y: [10, 11, 12, 13],
		name: "y-axis 1",
		type: "scatter"
	};

	const trace2: Data = {
		x: [1, 2, 3, 4],
		y: [400, 500, 600, 700],
		name: "y-axis 2",
		yaxis: "y2",
		type: "scatter"
	};

	const trace3: Data = {
		x: [1, 2, 3, 4],
		y: [4000, 5000, 6000, 7000],
		name: "y-axis 3",
		yaxis: "y3",
		type: "scatter"
	};

	const layout: Partial<Layout> = {
		title: "Multiple Y-Axis Example",
		autosize: true,
		yaxis: {
			title: "y-axis 1 title"
		},
		yaxis2: {
			title: "y-axis 2 title",
			titlefont: { color: "rgb(148, 103, 189)" },
			tickfont: { color: "rgb(148, 103, 189)" },
			overlaying: "y",
			side: "right"
		},
		yaxis3: {
			title: "y-axis 3 title",
			overlaying: "x",
			side: "right",
			position: 1.05 // Adjust this value to control the exact position
		}
	};

	return (
		<Plot
			data={[trace1, trace2, trace3]}
			useResizeHandler={true}
			style={{ width: "100%", height: "100%" }}
			// layout={{ ...layout, width, height }}
			layout={layout}
		/>
	);
};

export default MultiYAxisPlot;
