define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/item_container.html'
], function($, _, Backbone, ItemTemplate){

    var app = app || {};

    app.ItemView = Backbone.View.extend({

        tagName: 'div',
        className: 'details',
        template: _.template( ItemTemplate ),

        render: function(){
            //this.el is what we defined in tagName. use $el to get access to jQuery html() function
            var that = this;

            //console.log(window.detail);
            that.$el.html( that.template( window.detail ) );
            //_.each(window.detail, function(item){
            //    console.log(item);
            //    that.$el.append( that.template( item ) );
            //});

            return this;
        }

    });


    return app.ItemView;

});
