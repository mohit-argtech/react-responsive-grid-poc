import React, { useEffect, useRef, useState } from "react";
import Plot from "react-plotly.js";

type Props = { h: number; xref: HTMLDivElement };
const StackedYAxisPlot: React.FC<Props> = (props: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (props.xref) {
				setDimensions({
					width: props.xref.offsetWidth,
					height: props.xref.offsetHeight
				});
			}
		};

		const resizeObserver = new ResizeObserver(updateDimensions);
		// resizeObserver.observe(props.xref!);

		// Initial update
		// updateDimensions();

		return () => {
			resizeObserver.disconnect();
		};
	}, [containerRef, dimensions]);

	const trace1 = {
		x: [1, 2, 3, 4],
		y: [10, 11, 12, 13],
		name: "y-axis 1",
		type: "scatter"
	};

	const trace2 = {
		x: [1, 2, 3, 4],
		y: [400, 500, 600, 700],
		name: "y-axis 2",
		yaxis: "y2",
		type: "scatter"
	};

	const trace3 = {
		x: [1, 2, 3, 4],
		y: [2000, 2500, 3000, 3500],
		name: "y-axis 3",
		yaxis: "y3",
		type: "scatter"
	};

	const layout = {
		title: "Stacked Y-Axis Example",
		yaxis: {
			title: "y-axis 1 title"
		},
		yaxis2: {
			title: "y-axis 2 title",
			overlaying: "y",
			side: "left",
			position: 0.15
		},
		yaxis3: {
			title: "y-axis 3 title",
			overlaying: "y",
			side: "left",
			position: 0.3
		},
		width: dimensions.width,
		height: dimensions.height
	};

	const s = {
		height: 100,
		width: "100%"
	};

	console.log(props.xref);

	return (
		<Plot
			data={[trace1, trace2, trace3]}
			// layout={{ ...layout, height: dimensions.height }}
			layout={{ ...layout, height: props.h }}
		/>
	);
};

export default StackedYAxisPlot;
