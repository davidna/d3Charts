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
                    d3Chart.destroy();

                    expect(window.d3Chart).not.toBeDefined();
                });
            });
        });

	};

return { run: runBehaviorTests};
});