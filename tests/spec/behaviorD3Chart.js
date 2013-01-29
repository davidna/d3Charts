define([

	'../../js/src/chart'
    , '../../js/src/models/axis'
    , '../../js/src/models/legend'
    , '../../js/src/models/bar'
    , '../../js/src/models/barChart'

], function (

    D3Chart
    , Axis
    , Legend
    , Bar
    , BarChart

) {

    var runBehaviorTests = function() {

        describe('#### Behavior: d3Chart (core-component) ####', function(){
            it('verifying test engine: ', function() {
                expect(true).toBeTruthy();
            });

            describe('--- d3Chart.models ---', function() {
                
                var instanceOfAxis = new Axis();

                it('should represent an [axis]', function() {
                    expect(instanceOfAxis).toBeDefined();
                    expect(typeof instanceOfAxis).toBe('object');
                    expect(instanceOfAxis instanceof Axis).toBeTruthy();
                });

                it('should represent a [legend]', function() {
                    var instanceOfLegend = new Legend();

                    expect(instanceOfLegend).toBeDefined();
                    expect(typeof instanceOfLegend).toBe('object');
                    expect(instanceOfLegend instanceof Legend).toBeTruthy();
                });

                it('should represent a [bar]', function() {
                    var instanceOfBar = new Bar();

                    expect(instanceOfBar).toBeDefined();
                    expect(typeof instanceOfBar).toBe('object');
                    expect(instanceOfBar instanceof Bar).toBeTruthy();
                });

                it('should represent a [barChart]', function() {
                    var instanceOfBarChart = new BarChart();

                    expect(instanceOfBarChart).toBeDefined();
                    expect(typeof instanceOfBarChart).toBe('object');
                    expect(instanceOfBarChart instanceof BarChart).toBeTruthy();
                });
            });

            describe('--- d3Chart ---', function() {
                var d3Chart;

                beforeEach(function() {
                    d3Chart = new D3Chart();
                });

                afterEach(function() {
                    d3Chart.destroy();
                    d3Chart = null;    
                });

                it('should be an instance of D3Chart', function() {
                    expect(d3Chart instanceof D3Chart).toBeTruthy();
                });

                it('when [d3Chart.setInWindow] is called, it sets window.d3Chart to the current object', function() {
                    expect(window.d3Chart).not.toBeDefined();

                    d3Chart.setInWindow();

                    expect(window.d3Chart).toBe(d3Chart);
                });

                it('when [destroy] is called, it sets window.d3Chart to [undefined]', function() {
                    expect(window.d3Chart).not.toBeDefined();
                    d3Chart.setInWindow();
                    expect(window.d3Chart).toBe(d3Chart);

                    d3Chart.destroy();

                    expect(window.d3Chart).not.toBeDefined();
                });

                describe('[addModel] method', function() {
                    it('accepts a JSON argument', function() {
                        var oneArgumentJSON = { key: 'value' };

                        expect(function() { d3Chart.addModel(oneArgumentJSON); }).not.toThrow(new Error());
                    });
                });

                describe('[render] method', function() {
                    it('accepts a JSON argument', function() {
                        var oneArgumentJSON = { key: 'value' };

                        expect(function() { d3Chart.render(oneArgumentJSON); }).not.toThrow(new Error());
                    });
                });
            });
        });
	};

return { run: runBehaviorTests};
});