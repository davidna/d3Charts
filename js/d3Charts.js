function d3Charts(chartContainer) {

	function my() {
		var targetDOMElement = d3.select(chartContainer);

		targetDOMElement.append('svg:svg');
		targetDOMElement.attr('width', 400);
		targetDOMElement.attr('height', 300);

		return targetDOMElement;
	}

	return my;
};