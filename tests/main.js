requirejs.config({

    // Defines the base URL for Javascript files
    // The URL is relative to the main index.html page
    baseUrl: '.'

    // Defines aliases for common Javascript files/modules
    , paths: {

        'text': '../js/lib/require/require-text.min'
        
        //, 'datejs': 'libs/datepicker/js/date'
        , 'jquery': 'jquery/jquery.min'
        // , 'jqueryui':'libs/jquery/jquery-ui.min'
        // , 'jquerybbq': 'libs/jquery/jquery-bbq.min'
        // , 'doubletap': 'libs/jquery/jqueryui/doubletap'
        // , 'dragslider' : 'libs/jquery/jqueryui/dragslider'        
        // , 'dcdrilldown':'libs/dcdrilldown/jquery.dcdrilldown.1.2'
        
        // , 'underscore': 'libs/underscore-amd/underscore'
        // , 'backbone': 'libs/backbone-amd/backbone'
        // , 'marionette' : 'libs/backbone-amd/backbone.marionette.min'
        // , 'handlebars' : 'libs/handlebars/handlebars-1.0'
        , 'd3'         : '../js/lib/d3/d3.v2'
        //, 'nvd3'    : 'libs/nvd3/nv.d3'

        // export Image
        //, 'canvg' : 'libs/canvg/canvg'
        //, 'rgbcolor': 'libs/rgbcolor/rgbcolor'
        //, 'rgbcolor': 'http://canvg.googlecode.com/svn/trunk/rgbcolor'
        //, 'canvg': 'http://canvg.googlecode.com/svn/trunk/canvg'
        //, 'svgToDataURL': 'libs/svgToDataURL/svgToDataURL'

        // export Excel (.xlsx)
        // , 'xlsx': 'libs/xlsx/xlsx'
        // , 'jszip': 'libs/jszip/jszip'
        // , 'jszipDeflate': 'libs/jszip/jszip-deflate'
        // , 'jszipInflate': 'libs/jszip/jszip-inflate'
        // , 'jszipLoad': 'libs/jszip/jszip-load'

        //test suite
        // , 'simulate': 'libs/jquery/simulate'
        , 'sinon': 'sinon/sinon-1.3.4'
        , 'jasmine': 'jasmine/jasmine'
        , 'jasmineHtml': 'jasmine/jasmine-html'
        , 'jasmineTeamcity': 'jasmine/jasmine.teamcity_reporter'
        //, 'specsRunner': 'specsRunner'        

        // , 'templates': '../templates'
  
    }

    // Defines dependencies (effectively sets the loading orders)
    , shim: {
        // 'backbone': ['underscore', 'jquery'] 
        // , 'marionette' : ['backbone']
        // , 'jqueryui': ['jquery']
        // , 'jquerybbq': ['jquery']
        // , 'doubletap': ['jquery']
        // , 'dragslider': ['jquery']        
        // , 'dcdrilldown': ['jquery']
        // , 'jeditable': ['jquery']        
        // , 'nvd3' : ['d3']

        // , 
        'jasmine': ['sinon']
        , 'jasmineHtml': ['jasmine']
        , 'jasmineTeamcity': ['jasmine']
        
        // , 'app'    : ['jquery', 'jqueryui', 'backbone', 'marionette', 'handlebars', 'nvd3', 'xlsx', 'jszip', 'svgToDataURL', 'canvg', 'rgbcolor']
        , 'specsRunner' : ['d3']

    }

});

// Activates application module
require(['specsRunner'], function(specsRunner) { specsRunner.execute(); });