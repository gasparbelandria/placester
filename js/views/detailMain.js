define([ 'jquery', 'underscore', 'backbone', 'models/AppConfig', 'views/item', 'text!templates/item_element.html' ],

    function($, _, Backbone, AppConfig, ItemView, ContentTemplate) {

        var HomeView = Backbone.View.extend({

            el : ".contents",

            template: _.template(ContentTemplate),

            initialize : function() {
                var that = this;
                this.config = new AppConfig();
                this.render();
            },

            events: {
                //"click button #back": 'back'
            },

            render : function() {
                console.log(window.detail);
                var itemView = new ItemView({
                    model:window.detail
                });
                this.$el.html( itemView.render().el );
            }

        });
        return HomeView;
    });