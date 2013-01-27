define([], function() {
	var chart = window.chart || {}; // override object

	chart.models = {}; // library of interface components
	chart.graphs = []; // generated graphs (charts) on screen

	//window.chart = chart; // reset window object

	// render multiple graphs in queue
	chart.render = function() {
	  // generate a chart per graph
	  // push chart to chart.graphs
	  // splice queue array    
	};
	chart.render.queue = [];

	chart.addGraph = function(obj) {
	  // create generate and callback functions
	  // push graph to render queue
	  // invoke render
	};

	return chart;
});