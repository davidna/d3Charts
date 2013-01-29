define(['d3'
	, 'd3Chart'
	, 'axis'
], function (d3
	, D3Chart
	, Axis
) {

    var executeBootstrap = function (d3) {

    	var d3Loaded = (typeof d3 != 'undefined') && (typeof d3 =='object');
    	
    	if (d3Loaded) {
    		// - let's grab the #body with d3
	    	var contentBodyTagArray = d3.select('body');

	    	// - how many we got?
	    	if (!contentBodyTagArray || contentBodyTagArray.length == 0)
	    		console.log('ERROR: no [body] tag in mark-up --> no example can be run.');
	    	else {
	    		var firstBodyTag = contentBodyTagArray[0][0];

		    	var children = firstBodyTag.children;

		    	console.log('example counts: ', children.length);

		    	// load first example: axis
		    	var firstExampleAxis = new Axis();

		    	var d3Chart = new D3Chart();
		    	d3Chart.addModel(firstExampleAxis);

		    	var firstExampleContainerSelector = '.componentContainer';
		    	var idOfModel = 1;
		    	var idOfChartWithinDOM = 'firstChart';

		    	var options = {
		    		selector: firstExampleContainerSelector
		    		, modelIndex: idOfModel
		    		, idDOM: idOfChartWithinDOM
		    	};

		    	d3Chart.render(options);
	    	}
	    	
    	} else {
    		console.log('ERROR: d3 not loaded --> halting bootstrap.');
    	}
    };

    return { execute: executeBootstrap };
});