import React from "react";
import Plot from "react-plotly.js";

const VerticallyStackedYAxisPlot: React.FC = () => {
	const trace1 = {
		x: [1, 2, 3, 4],
		y: [10, 11, 12, 13],
		name: "y-axis 1",
		type: "scatter",
		yaxis: "y1"
	};

	const trace2 = {
		x: [1, 2, 3, 4],
		y: [400, 500, 600, 700],
		name: "y-axis 2",
		yaxis: "y2",
		type: "scatter"
	};

	const layout = {
		title: "Vertically Stacked Y-Axis Example",
		grid: {
			rows: 2,
			columns: 1,
			pattern: "independent"
		},
		yaxis1: {
			title: "y-axis 1 title",
			domain: [0.55, 1] // Top half of the plot
		},
		yaxis2: {
			title: "y-axis 2 title",
			domain: [0, 0.45] // Bottom half of the plot
		}
	};

	return <Plot data={[trace1, trace2]} layout={layout} />;
};

export default VerticallyStackedYAxisPlot;
