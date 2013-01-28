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

    var runBehaviorTests = function() {

        describe('#### U/TDD: Axis component expected work-units ####', function(){
            it('verifying test engine: ', function() {
                expect(true).toBeTruthy();
            });

            describe('--- d3Chart.models.axis ---', function() {
                var axis;

                beforeEach(function() {
                    axis = new Axis();
                });

                it('should accept a JSON of options', function() {
                    var optionsJSON = {
                        dimensions: 2
                        , orientation: 'horizontal'
                        , start: 0
                        , end: 100
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
            });
        });

	};

return { run: runBehaviorTests};
});