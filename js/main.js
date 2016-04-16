//--------------
require.config({
    baseUrl : "./js",
    paths : {
        // Core Libraries
        jquery                  : 'libs/jquery/jquery-1.11.3.min',
        underscore              : 'libs/underscore/underscore-1.8.3',
        backbone                : 'libs/backbone/backbone-1.2.1.min',
        json2                   : "libs/json2/json2",
        text                    : 'libs/underscore/text',
        // Application libs
        bootstrap               : "libs/bootstrap/bootstrap.min",
        // Templates Folders
        templates               : '../templates'
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim : {
        "bootstrap" : {
            deps : [ "jquery" ]
        },
        "underscore" : {
            "exports" : "_"
        },
        "text" : {
            "exports" : "text"
        },
        // Backbone dependencies
        "backbone" : {
            // Depends on underscore and jQuery
            "deps" : [ "underscore", "text", "jquery"],
            // Exports the global window.Backbone object
            "exports" : "Backbone"
        }
    }
});
require([
    'app' ], function(App) {
    App.initialize();
});