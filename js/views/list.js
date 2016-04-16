define([
'jquery',
'underscore',
'backbone',
'text!templates/list_container.html'
], function($, _, Backbone, ListTemplate){

	var app = app || {};

	app.ListView = Backbone.View.extend({

		tagName: 'div',
		className: 'list',
		template: _.template( ListTemplate ),

		render: function(){
			//this.el is what we defined in tagName. use $el to get access to jQuery html() function
            var that = this;
            _.each(this.model, function(item){
                that.$el.append( that.template( item ) );
            });

			return this;
		}

	});


	return app.ListView;

});
