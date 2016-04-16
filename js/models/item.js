define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

	var app = app || {};

	app.Item = Backbone.Model.extend({

		urlRoot: "api/list",

		defaults: {
			id: 0,
            cur_data: {},
            location: {},
            purchase_types: 0,
            contact: {},
            zoning_types: {},
            images: {}
		}

	});

	return app.Item;

});	