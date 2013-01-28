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

    var runUnitTests = function() {

        describe('#### Unit: d3Chart (core-component) ####', function(){
            var d3Chart;

            beforeEach(function() {
                d3Chart = new D3Chart();
            });

            afterEach(function() {
                d3Chart.destroy();
            });

            describe('[constructor]', function() {
                it('should accept a JSON of options', function() {
                    var optionsJSON = {
                        dimensions: 2
                        , orientation: 'horizontal'
                        , startAt: 0
                        , endAt: 100
                        , unit: 'px'
                    };

                    expect(function() { axis = new Axis(optionsJSON); }).not.toThrow(new Error());
                });

                it('given optionsJSON with [dimensions:2], should fill its property [dimensions] with value [2]', function() {
                    var optionsJSON = {
                        dimensions: 2
                    };

                    axis = new Axis(optionsJSON);

                    expect(axis.dimensions).toBe(2);
                });

                it('given optionsJSON with [orientation: \'horizontal\'], should fill its property [orientation] with value [\'horizontal\']', function() {
                    var optionsJSON = {
                        orientation: 'horizontal'
                    };

                    axis = new Axis(optionsJSON);

                    expect(axis.orientation).toBe('horizontal');
                });

                it('given optionsJSON with [startAt: 0], should fill its property [startAt] with value [0]', function() {
                    var optionsJSON = {
                        startAt: 0
                    };

                    axis = new Axis(optionsJSON);

                    expect(axis.startAt).toBe(0);
                });

                it('given optionsJSON with [endAt: 100], should fill its property [endAt] with value [100]', function() {
                    var optionsJSON = {
                        endAt: 100
                    };

                    axis = new Axis(optionsJSON);

                    expect(axis.endAt).toBe(100);
                });

                it('given optionsJSON with [unit: \'px\'], should fill its property [unit] with value [\'px\']', function() {
                    var optionsJSON = {
                        unit: 'px'
                    };

                    axis = new Axis(optionsJSON);

                    expect(axis.unit).toBe('px');
                });
            });

            describe('[destroy]', function() {
                beforeEach(function() {
                    d3Chart = new D3Chart();
                });

                afterEach(function() {
                    d3Chart.destroy();
                });

                it('should exist as a method', function() {
                    expect(axis.destroy).toBeDefined();
                    expect(typeof axis.destroy).toBe('function');
                });

                it('should set all properties to [undefined]', function() {
                    var options = {
                        dimensions: 2
                        , orientation: 'horizontal'
                        , startAt: 0
                        , endAt: 100
                        , unit: 'px'
                    };

                    axis = new Axis(options);

                    expect(axis.properties()).toBeDefined();
                    console.log(axis.properties());
                    expect(JSON.stringify(axis.properties())).toBe(JSON.stringify([2, "horizontal", 0, 100, "px"]));
                    
                    axis.destroy();

                    expect(axis.properties).not.toBeDefined();
                    expect(axis.dimensions).not.toBeDefined();
                    expect(axis.orientation).not.toBeDefined();
                    expect(axis.startAt).not.toBeDefined();
                    expect(axis.endAt).not.toBeDefined();
                    expect(axis.unit).not.toBeDefined();
                });
            });

            describe('[addModel]', function () {
                it('|---- exists as a method', function() {
                    expect(d3Chart.addModel).toBeDefined();
                    expect(typeof d3Chart.addModel).toBe('function');
                });

                describe('|---- argument validation: ', function() {
                    it('accepts a d3Chart.models.axis [object] argument', function() {
                        var axis = new Axis();

                        expect(function() { d3Chart.addModel(axis); }).not.toThrow(new Error());
                    });

                    it('accepts a d3Chart.models.bar [object] argument', function() {
                        var bar = new Bar();

                        expect(function() { d3Chart.addModel(bar); }).not.toThrow(new Error());
                    });

                    it('accepts a d3Chart.models.barChart [object] argument', function() {
                        var barChart = new BarChart();

                        expect(function() { d3Chart.addModel(barChart); }).not.toThrow(new Error());
                    });

                    it('accepts a d3Chart.models.legend [object] argument', function() {
                        var legend = new Legend();

                        expect(function() { d3Chart.addModel(legend); }).not.toThrow(new Error());
                    });
                });
                
                it('given a d3Chart.model, adds the argument to its property [models]', function() {
                    var axis = new Axis();
                    var bar = new Bar();
                    var barChart = new BarChart();
                    var legend = new Legend();
                    
                    d3Chart.addModel(axis);
                    d3Chart.addModel(bar);
                    d3Chart.addModel(barChart);
                    d3Chart.addModel(legend);
                    //console.log(d3Chart.models ? d3Chart.models.length : 'models is undefined');
                    expect(d3Chart.models[0]).toBe(axis);  
                    expect(d3Chart.models[1]).toBe(bar);
                    expect(d3Chart.models[2]).toBe(barChart);
                    expect(d3Chart.models[3]).toBe(legend);
                });
            });
        });
	};

return { run: runUnitTests};
});