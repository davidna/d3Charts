define(['d3'], function (d3) {

    var executeBootstrap = function (d3) {

    	// console.log(arguments);

    	// console.log('START(check): d3 load-state');
    	var d3Loaded = (typeof d3 != 'undefined') && (typeof d3 =='object');
    	// console.log('- d3 ready? --> ', d3Loaded);
    	// console.log('END(check)');

    	if (d3Loaded) {
    		// console.log('typeof d3: ', typeof d3);

	    	// - let's grab the #body with d3
	    	var contentBodyTagArray = d3.select('body');

	    	// - how many we got?
	    	if (!contentBodyTagArray || contentBodyTagArray.length == 0)
	    		console.log('no [body] tag in mark-up --> no example can be run.');
	    	else {
	    		var firstBodyTag = contentBodyTagArray[0][0];

		    	var children = firstBodyTag.children;

		    	console.log('example counts: ', children.length);

		    	// load first example: line(300x2, black)
	    	}
	    	
    	} else {
    		console.log('d3 not loaded --> halting bootstrap.');
    	}
    };

    return { execute: executeBootstrap };
});