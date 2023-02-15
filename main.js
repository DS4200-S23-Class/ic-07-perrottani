// Setting Frame Constants
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 100, right: 100, top: 50, bottom: 50};

// Data Points
const data = [55000, 48000, 27000, 66000, 90000];

// Vis Height and Width
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.bottom;

// Frame 
const FRAME = d3.select("#vis")
					.append("svg")
						.attr("height", FRAME_HEIGHT)
						.attr("width", FRAME_WIDTH)
						.attr("class", "frame");


// Gets max point in data
const MAX_Y = d3.max(data, (d) => {return d;});

// Scales the data for the frame 
const Y_SCALE = d3.scaleLinear()
					.domain([0, (MAX_Y + 10000)])
					.range([VIS_HEIGHT, 0]);

// Plot the points
FRAME.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", MARGINS.left)
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.top);
            })
			.attr("r", 10)
			.attr("class", "point")

// Adds an axis
FRAME.append("g")
		.attr("transform", 
			"translate(" + MARGINS.left + "," + MARGINS.top + ")")
		.call(d3.axisLeft(Y_SCALE).ticks(4))
			.attr("font-size", "20px");