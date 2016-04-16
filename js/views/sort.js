define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sort_options.html'
], function($, _, Backbone, SortTemplate) {

    var app = app || {};

    app.SortView = Backbone.View.extend({

        el: '.contents',

        template: _.template(SortTemplate),

        render : function() {
            this.$el.html(this.template());
            return this;
        }

    });

    return app.SortView;

});
