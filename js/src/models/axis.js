define([ ], function() {
	var d3ChartAxisModel = function(options) {
		//console.log('options: ', options);

		if (options) {
			this.dimensions = options.dimensions;
			this.orientation = options.orientation;
			this.startAt = options.startAt;
			this.endAt = options.endAt;
			this.unit = options.unit;

			this.properties = function() {
				return [ this.dimensions
					, this.orientation
					, this.startAt
					, this.endAt
					, this.unit
				];
			};
		} else 
			this.properties = undefined;

		this.destroy = function() {
			this.dimensions = undefined;
			this.orientation = undefined;
			this.startAt = undefined;
			this.endAt = undefined;
			this.unit = undefined;

			this.properties = undefined;
		};

		
	};

	return d3ChartAxisModel;
});