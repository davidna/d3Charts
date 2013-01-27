define([], function() {
	var chart = function() {
		
		this.setInWindow = function() {
			window.d3Chart = this;
		};

		this.destroy = function() {
			window.d3Chart = undefined;
		};

		// this.models = {}; // library of interface components
		// this.graphs = []; // generated graphs (charts) on screen

		// // render multiple graphs in queue
		// chart.render = function() {
		//   // generate a chart per graph
		//   // push chart to chart.graphs
		//   // splice queue array    
		// };
		// chart.render.queue = [];

		// chart.addGraph = function(obj) {
		//   // create generate and callback functions
		//   // push graph to render queue
		//   // invoke render
		// };
	};

	return chart;
});