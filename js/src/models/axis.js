define([ ], function() {
	var d3ChartAxisModel = function(options) {
		console.log('options: ', options);

		if (options) {
			this.dimensions = options.dimensions;
			this.orientation = options.orientation;
		}
	};

	return d3ChartAxisModel;
});