define([

	 '../../js/src/core'
   // , 'models/userSettings'
   // , 'models/trpcatmodel'
   // , 'collections/seriesCollection'
   // , 'collections/trpCollection'
   // , 'collections/media'
   // , 'tests/mockFunction'
   // , 'collections/xlworksheets'

], function (

	  Core
	// , UserSettings
 //    , TRPCatModel
	// , SeriesCollection
	// , TRPCollection
 //    , MediaCollection
	// , mockFunction
    // , XLWorksheets

) {

    var runBehaviorTests = function() {

        describe('#### A/TDD: D3PO component expected behavior ####', function(){
            it('verifying test engine: ', function() {
                expect(true).toBeTruthy();
            });

            describe('--- Core ---', function() {
                var core;

                beforeEach(function() {
                    core = new Core();
                });

                afterEach(function() {
                    //core.destroy();
                });

                it('should be check if ')
            });
        });

	};

return { run: runBehaviorTests};
});