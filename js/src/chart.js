define([], function() {
	var chart = function(options) {

		if (options) {
			this.dimensions = options.dimensions;
			this.width = options.width;
			this.height = options.height;
			this.unit = options.unit;
		}
		
		this.models = []; // library of interface components

		this.setInWindow = function() {
			window.d3Chart = this;
		};

		this.destroy = function() {
			window.d3Chart = undefined;
		};

		this.addModel = function (model) {
			//console.log(typeof model);
			//console.log(model);

			this.models.push(model);
		};
		
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