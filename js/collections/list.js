define([
'jquery',
'underscore',
'backbone',
'models/item'
], function($, _, Backbone, Item){

	var app = app || {};

	app.List = Backbone.Collection.extend({
		model: Item,
		url: "api/list"
	});

	return app.List;

});