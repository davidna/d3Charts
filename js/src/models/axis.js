define([ ], function() {
	var d3ChartAxisModel = function(options) {
		console.log('options: ', options);

		if (options) {
			this.dimensions = options.dimensions;
		}
	};

	return d3ChartAxisModel;
});