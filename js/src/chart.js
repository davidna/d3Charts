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
		}

		this.destroy = function() {
			window.d3Chart = undefined;
		}

		this.addModel = function (model) {
			//console.log(typeof model);
			//console.log(model);

			this.models.push(model);
		}

		this.render = function(options) {
			if (options) {
				console.log('options: ', options);

				if (options.width) this.setWidth(options.width);
				if (options.height) this.setHeight(options.height);
				if (options.margins) this.setMargins(options.margins);

				if (options.selector) {
					var selectedArray = d3.selectAll(options.selector);

					//console.log('selected: ', selectedArray ? selectedArray.length : 'empty');

					if (selectedArray) {
						var selectedItem = selectedArray[options.itemIndex];
						var selectedModel = this.models[options.modelIndex];

						console.log('selectedItem: ', selectedItem);
						console.log('selectedModel: ', selectedModel);

						var chart = d3.select(options.selector)
						.append('svg')
						.attr('class', 'chart')
						.attr('width', this.width)
						.attr('height', this.height);

						var fakeData = [10, 20, 30];

						if (!this.width) this.width = 420;
						var x = d3.scale.linear()
						.domain([0, d3.max(fakeData)])
						.range(['0px', this.width + 'px']);

						chart.selectAll('rect')
						.data(fakeData)
						.enter().append('rect')
						.attr('y', function(d, i) { return i * 20; })
						.attr('width', x)
						.attr('height', 20)
						.attr('dx', -3)
						.attr('dy', '.35em')
						.attr('text-anchor', 'end')
						.text(String);


					}
				}
			}
		}

		this.setWidth = function(width) {
			console.log('setWidth: ', width);
		}

		this.setHeight = function(height) {
			console.log('setHeight: ', height);
		}

		this.setMargins = function(marginsJSON) {
			console.log('setMargin: ', marginsJSON);
		}
		
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