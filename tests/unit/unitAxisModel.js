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

        describe('#### U/TDD: Axis component expected work-units ####', function(){
            it('verifying test engine: ', function() {
                expect(true).toBeTruthy();
            });

            describe('--- d3Chart.models.axis ---', function() {
                
            });
        });

	};

return { run: runBehaviorTests};
});