define(['jquery'], function ($) {

    var execute = function (reporter) {

        require([

              'sinon'
            , 'jasmine'
            , 'jasmineHtml'
            , 'jasmineTeamcity'

            //TODO: References all BDD/TDD Specs in here
            // #### core ####
            , 'spec/behaviorCore'
            
        ], function () {

            // Registers all the test cases
            var specs = Array.prototype.slice.call(arguments, 4);
            for (var i = 0; i < specs.length; i++) {
                specs[i].run();
            }

            // Decides which reporter to use
            reporter || (reporter = 'html');
            switch (reporter.toLowerCase()) {

                // Trivial Reporter
                case 'trivial':
                    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
                    jasmine.getEnv().execute();

                    var $TrivialReporter = $('#TrivialReporter');
                    if ($TrivialReporter.length) {
                        // "Shows passed tests checkbox" should be checked
                        $('#__jasmine_TrivialReporter_showPassed__' ).attr('checked', 'checked');
                        
                        $TrivialReporter
                            .addClass('show-passed')    //show passed tests, in the visual reporter
                            .find('.banner')
                            .prepend($('<a id="JasmineReporterCloseBtn" href="javascript:void(0)" title="Close tests results">x</a>')
                                .click(function() {
                                    $('#TrivialReporter').remove();
                                })
                            );
                    }

                    break;

                // TeamCity Reporter
                case 'teamcity':
                    jasmine.getEnv().addReporter(new jasmine.TeamcityReporter());
                    jasmine.getEnv().execute();
                    break;

                // HTML Reporter
                default:
                    jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
                    jasmine.getEnv().execute();

                    var $HtmlReporter = $('#HTMLReporter');
                    if ($HtmlReporter.length) {
                        $HtmlReporter
                            .find('.banner')
                            .prepend($('<a id="JasmineReporterCloseBtn" href="javascript:void(0)" title="Close tests results">x</a>')
                                .click(function() {
                                    $('#HTMLReporter').remove();
                                })
                            );
                    }

                    break;
            }

        });
    };

    return { execute: execute };
    
});
