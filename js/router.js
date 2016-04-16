define(['jquery', 'underscore', 'backbone', 'views/appView', 'models/AppConfig', 'views/contentMain', 'views/detailMain'],
function($, _, Backbone, AppView, AppConfig, ContentView, DetailView) {

    var AppRouter = Backbone.Router.extend({
        routes : {
            ''              : 'showContent',   // main list
            'detail/:id'    : 'showDetail'  // detail
        }
    });

    var initialize = function() {

        var app_router = window.app_router = new AppRouter();

        Backbone.View.prototype.goTo = function(loc) {
            app_router.navigate(loc, {
                trigger : true,
                replace : true
            });
        };

        // Main List
        app_router.on('route:showContent', function() {
            var contentView = new ContentView();
        });

        // Details
        app_router.on('route:showDetail', function() {
            var detailView = new DetailView();
        });


        Backbone.history.start();

    };
    return {
        initialize : initialize
    };
});
