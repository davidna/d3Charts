define([

	 '../../js/src/chart'

], function (

	  D3Chart

) {

    var runBehaviorTests = function() {

        describe('#### A/TDD: d3Chart component expected behavior ####', function(){
            it('verifying test engine: ', function() {
                expect(true).toBeTruthy();
            });

            describe('--- Core ---', function() {
                var d3Chart;

                beforeEach(function() {
                    d3Chart = new D3Chart();
                });

                afterEach(function() {
                    //d3Chart.destroy();
                });

                it('should be check if ')
            });
        });

	};

return { run: runBehaviorTests};
});