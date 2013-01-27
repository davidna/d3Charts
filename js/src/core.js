define([], function() {
	var d3po = window.d3po || {}; // override object

	d3po.models = {}; // library of interface components
	d3po.graphs = []; // generated graphs (charts) on screen

	//window.d3po = d3po; // reset window object

	// render multiple graphs in queue
	d3po.render = function() {
	  // generate a chart per graph
	  // push chart to d3po.graphs
	  // splice queue array    
	};
	d3po.render.queue = [];

	d3po.addGraph = function(obj) {
	  // create generate and callback functions
	  // push graph to render queue
	  // invoke render
	};

	return d3po;
});