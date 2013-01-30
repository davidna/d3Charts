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
            var d3Chart, axis;

            var optionsJSON = {
                dimensions: 2
                , orientation: 'horizontal'
                , startAt: 0
                , endAt: 100
                , width: 300
                , height: 200
                , unit: 'px'
            };

            beforeEach(function() {
                d3Chart = new D3Chart();
            });

            afterEach(function() {
                d3Chart.destroy();

                if (axis) axis.destroy();
            });

            describe('[constructor]', function() {
                it('should accept a JSON of options', function() {
                    expect(function() { d3Chart = new D3Chart(optionsJSON); }).not.toThrow(new Error());
                });

                it('given optionsJSON with [dimensions:2], should fill its property [dimensions] with value [2]', function() {
                    d3Chart = new D3Chart(optionsJSON);

                    expect(d3Chart.dimensions).toBe(2);
                });

                it('given optionsJSON with [width: 300], should fill its property [width] with value [300]', function() {
                    d3Chart = new D3Chart(optionsJSON);

                    expect(d3Chart.width).toBe(300);
                });

                it('given optionsJSON with [height: 200], should fill its property [height] with value [200]', function() {
                    d3Chart = new D3Chart(optionsJSON);

                    expect(d3Chart.height).toBe(200);
                });

                it('given optionsJSON with [unit: \'px\'], should fill its property [unit] with value [\'px\']', function() {
                    d3Chart = new D3Chart(optionsJSON);

                    expect(d3Chart.unit).toBe('px');
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
                    expect(d3Chart.destroy).toBeDefined();
                    expect(typeof d3Chart.destroy).toBe('function');
                });

                it('should set all properties to [undefined]', function() {
                    d3Chart = new Axis(optionsJSON);

                    expect(d3Chart.properties()).toBeDefined();
                    expect(JSON.stringify(d3Chart.properties())).toBe(JSON.stringify([2, "horizontal", 0, 100, "px"]));
                    
                    d3Chart.destroy();

                    expect(d3Chart.properties).not.toBeDefined();
                    expect(d3Chart.dimensions).not.toBeDefined();
                    expect(d3Chart.width).not.toBeDefined();
                    expect(d3Chart.height).not.toBeDefined();
                    expect(d3Chart.unit).not.toBeDefined();
                });
            });

            describe('[addModel]', function() {
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
                
                describe('|---- actual work: ', function() {
                    it('given a d3Chart.model, adds the argument to its property [models]', function() {
                        var axis = new Axis();
                        var bar = new Bar();
                        var barChart = new BarChart();
                        var legend = new Legend();
                        
                        d3Chart.addModel(axis);
                        d3Chart.addModel(bar);
                        d3Chart.addModel(barChart);
                        d3Chart.addModel(legend);
                        
                        expect(d3Chart.models[0]).toBe(axis);  
                        expect(d3Chart.models[1]).toBe(bar);
                        expect(d3Chart.models[2]).toBe(barChart);
                        expect(d3Chart.models[3]).toBe(legend);
                    });
                });
            });

            describe('[render]', function() {

                it('|---- exists as a method', function() {
                    expect(d3Chart.render).toBeDefined();
                    expect(typeof d3Chart.render).toBe('function');
                });

                describe('|---- argument triggers work:', function() {
                    it('given optionsJSON with [selector: { string }], it calls d3.selectAll({ string })', function() {
                        var optionsJSON = {
                            selector: '.componentContainer'
                        };

                        spyOn(d3, 'selectAll');

                        d3Chart.render(optionsJSON);

                        expect(d3.selectAll).toHaveBeenCalledWith(optionsJSON.selector);

                        d3.selectAll.reset();
                    });

                    it('given optionsJSON with [width: { integer }, height: { integer }], calls method [setWidth, setHeight] with respective values', function() {
                        var optionsJSON = {
                            width: 900
                            , height: 500
                        }

                        spyOn(d3Chart, 'setWidth');
                        spyOn(d3Chart, 'setHeight');

                        d3Chart.render(optionsJSON);

                        expect(d3Chart.setWidth).toHaveBeenCalledWith(optionsJSON.width);
                        expect(d3Chart.setHeight).toHaveBeenCalledWith(optionsJSON.height);
                    });

                    it('given optionsJSON with [margins: { top: { integer }, right: { integer }, bottom: { integer }, left: { integer} } ], it calls method [setMargins] with the margin JSON', function() {
                        var optionsJSON = {
                            margins: { top: 0, right: 0, bottom: 0, left: 0 }
                        };

                        spyOn(d3Chart, 'setMargins');

                        d3Chart.render(optionsJSON);

                        expect(d3Chart.setMargins).toHaveBeenCalledWith(optionsJSON.margins);
                    });

                    it('given d3Chart.models.length > 0 AND optionsJSON with [selector: { string }, itemIndex: { integer }, modelIndex: { integer } ], it appends the identified model (HTML-friendly) to the selected-dom-element', function () {
                        // prep: d3Chart.models.length > 0
                        var optionsJSON = {
                            dimensions: 2
                            , orientation: 'horizontal'
                            , startAt: 0
                            , endAt: 100
                            , unit: 'px'
                        };

                        var axis = new Axis(optionsJSON);

                        d3Chart.addModel(axis);

                        // test scope: d3Chart.render
                        optionsJSON = {
                            selector: '.componentContainer'
                            , itemIndex: 0
                            , modelIndex: 0
                        };

                        var jQueryReferenceToDOMElement = $(optionsJSON.selector);

                        console.log(jQueryReferenceToDOMElement);

                        var beforeRenderInnerMarkup = jQueryReferenceToDOMElement.html();

                        d3Chart.render(optionsJSON);

                        var afterRenderInnerMarkup = $(optionsJSON.selector).html();

                        console.log(beforeRenderInnerMarkup);
                        console.log(afterRenderInnerMarkup);

                        // verify
                        expect(beforeRenderInnerMarkup).not.toBe(afterRenderInnerMarkup);
                    });
                });

                
            });
        });
	};

return { run: runUnitTests};
});