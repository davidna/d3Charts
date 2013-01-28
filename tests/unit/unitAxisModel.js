define([

	'../../js/src/chart'
    , '../../js/src/models/axis'
    // , '../../js/src/models/legend'
    // , '../../js/src/models/bar'
    // , '../../js/src/models/barChart'

], function (

    D3Chart
    , Axis
    // , Legend
    // , Bar
    // , BarChart

) {

    var runUnitTests = function() {

        describe('#### Unit: d3Chart.models.axis (Axis component) ####', function(){
            var axis;

            beforeEach(function() {
                axis = new Axis();
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

                    expect(axis.properties).not.toBeDefined();

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
        });
	};

return { run: runUnitTests};
});