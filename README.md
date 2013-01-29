# visualizing charts with d3 is not easy to pick-up

this is a way to learn it, for me - so it's a work in progress. :)

# re-usable component, which wraps around d3 is key

this wrapper should be specific for each type of chart

# the component should be plug-n-play capable

-----

Dependency Hierarchy

<ul>
	d3.js [currently v2]
	<li>
		charts.js [d3Charts]
		<ul>
			<li>
				models [chart-type / reusable components]
				<ul>
					[starting: basic bar-chart]
					<li>axis.js</li>
					<li>bar.js</li>
					<li>barChart.js</li>
					<li>legend.js</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>
