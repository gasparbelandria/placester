define(
		[ 'underscore', 'backbone' ],
		function(_, Backbone) {
			var url = location.protocol + "//" + location.host;
			var REST_URL = url + "/placester/backbone/api";

			var AppConfig = Backbone.Model.extend({
				defaults : {
					restpath : REST_URL,
					timeout : 10000
				}
			});

			return AppConfig;

		});