define([ 'jquery', 'underscore', 'backbone', 'models/AppConfig', 'collections/list', 'views/list', 'views/sort', 'text!templates/list_element.html' ],

function($, _, Backbone, AppConfig, List, ListView, SortView, ContentTemplate) {

    var offset = 0,
        itemsPerPage = 10,
        limit = 10,
        listingsObj = listingsObj || [];


    var HomeView = Backbone.View.extend({

        el : ".contents",
        template: _.template(ContentTemplate),
        offset: 0,
        itemsPerPage: 10,

        initialize : function() {
            var that = this;
            this.config = new AppConfig();
            this.collection = new List();
            this.listenTo(this.collection, 'reset', this.load);
            this.collection.fetch({reset: true});

            $(window).scroll(function(){
                //console.log($(window).scrollTop());
                if  ($(window).scrollTop() == $(document).height() - $(window).height()){
                    offset = offset + itemsPerPage;
                    limit = limit + itemsPerPage;

                    if (Object.keys(window.listingsObj).length > offset){
                        console.log(Object.keys(window.listingsObj).length +'>'+ offset);
                        that.render();
                    }
                }
            });

        },

        events: {
            "click button.details": 'details',
            "click input[type=radio]": 'sort',
            "click button.back": 'back'
        },

        back: function(){
            window.app_router.navigate("", {trigger: true, replace: true});
            this.render();
        },

        sort : function(e){
            if (e.target.value === 'price'){
                window.listingsObj = _.sortBy(window.listingsObj, function(o) { return o.cur_data.price; });
            }else if(e.target.value === 'locality'){
                window.listingsObj = _.sortBy(window.listingsObj, function(o) { return o.location.locality; });
            }
            $('.main_div').remove();
            offset = 0;
            limit = 10;
            this.render();

        },

        details : function (e){
            var id = e.target.attributes['3'].value;
            var index = _.findLastIndex(window.listingsObj, { // this.collection
                id: id
            });
            window.detail = window.listingsObj[index];
            window.app_router.navigate("detail/" + id, {trigger: true, replace: true});
        },

        load: function(){
            var listings = JSON.parse(JSON.stringify(this.collection));
            window.listingsObj = listings[0].listings;

            // Content
            $(this.el).empty();

            // Sort options
            var sortView = new SortView();
            sortView.render();

            this.render();
        },

        render : function() {
            var that = this;
            console.log(offset +', '+ limit);
            var items = window.listingsObj.slice(offset, limit);
            this.renderArticle( items );
        },

        renderArticle: function( item ){
            var listView = new ListView({
                model:item
            });
            this.$el.append( listView.render().el );
        }

    });
    return HomeView;
});