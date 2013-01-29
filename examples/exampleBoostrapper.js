define(['d3'
	, 'd3Chart'
], function (d3
	, D3Chart
) {
	var d3Chart = new D3Chart();
	d3Chart.setInWindow();

    var executeBootstrap = function (d3, d3Chart) {

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

		    	// load first example: line(300x2, black)

	    	}
	    	
    	} else {
    		console.log('ERROR: d3 not loaded --> halting bootstrap.');
    	}
    };

    return { execute: executeBootstrap };
});