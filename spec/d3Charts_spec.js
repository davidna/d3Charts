describe('d3Charts', function() {
	
	var chartsComponent;

	it('should have a constructor', function() {
		chartsComponent = new d3Charts();
	});

	describe('render', function() {
		var renderedChart;

		beforeEach(function() {
			renderedChart = new d3Charts('body');
		});

		it('should append an svg element to the DOM', function() {
			var renderedChartSVG = renderedChart;

			expect(renderedChartSVG).toBeDefined();
		});
	});

});