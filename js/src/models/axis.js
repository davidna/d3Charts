define([ ], function() {
	var d3ChartAxisModel = function(options) {
		//console.log('options: ', options);

		if (options) {
			this.dimensions = options.dimensions;
			this.orientation = options.orientation;
			this.startAt = options.startAt;
			this.endAt = options.endAt;
			this.unit = options.unit;
		}

		this.destroy = function() {

		};
	};

	return d3ChartAxisModel;
});