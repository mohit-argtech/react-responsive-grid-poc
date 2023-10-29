import React, { useEffect, useRef, useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Chart1 from "./Chart";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DraggableResizableCanvas: React.FC = () => {
	const [chartDimensions, setChartDimensions] = useState({
		width: 0,
		height: 0
	});

	const onLayoutChange = (layout: Layout[]) => {
		const chartItem = layout.find((item) => item.i === "a");
		if (chartItem) {
			debugger;
			setChartDimensions({
				width: chartItem.w * 100, // Assuming 100px per grid unit for width
				height: chartItem.h * 100 // Assuming 100px per grid unit for height
			});
		}
	};
	const layouts = {
		// resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"],
		lg: [
			{ i: "a", x: 0, y: 0, w: 2, h: 2 },
			{ i: "b", x: 2, y: 0, w: 2, h: 2 }
		]
	};

	return (
		<ResponsiveGridLayout
			className="layout"
			layouts={layouts}
			// breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
			cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
			rowHeight={100}
			isDraggable={true}
			isResizable={true}
			resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
			onLayoutChange={onLayoutChange}>
			<div key="a">
				<Card variant="outlined" style={{ height: "100%", width: "100%" }}>
					<Chart1
						height={chartDimensions.height}
						width={chartDimensions.width}
					/>
				</Card>
			</div>
			<div key="b">
				<Card variant="outlined" style={{ height: "100%", width: "100%" }}>
					<Chart1
						height={chartDimensions.height}
						width={chartDimensions.width}
					/>
				</Card>
			</div>
		</ResponsiveGridLayout>
	);
};

export default DraggableResizableCanvas;
