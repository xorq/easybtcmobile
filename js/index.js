

var VaultView = Backbone.View.extend({
	el: $('#vault'),
	template: _.template($('#vault-template').text()),

	render: function() {
		this.$el.html(this.template());
		return this;
	}
})

var Vault = Backbone.Model.extend({

})

var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},

	index: function(){
		
	},

	vault: function(){

		vaultHolder = $('#vault');
		vaultHolder.empty()	
		
		var vaultView = (new VaultView());
		
		vaultView.render().$el.appendTo(vaultHolder);	
		vaultHolder.enhanceWithin();
		// Initialize the sliderbutton
		

	},
};

var router = new $.mobile.Router([
		//{ "#bus[?]\\d+": {handler: "bus", events:"bs"} },
		//{ "#dest[?]\\S+": {handler: "dest", events:"bs"} },
		{ "": { handler: "index", events: "bs"} },
		{ "#vault": { handler: "vault", events: "bs"} }
], app);
