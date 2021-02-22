/* Magic Mirror
 * Node Helper: MMM-CrucialVerses
 *
 * By Samuel Liu
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var request = require('request');
var verses = require('./verses.js').verses;


module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
		console.log("Started node_helper.js for MMM-CrucialVerses.");
	},

	socketNotificationReceived: function(notification, payload) {
		console.log(this.name + " node helper received a socket notification: " + notification + " - Payload: " + payload);
		this.verseRequest();
	},

	verseRequest: function() {
		var self = this;
		var index = Math.floor(Math.random() * Math.floor(verses.length))
		var verse = verses[index]
		var url = `https://api.lsm.org/recver.php?String=`+verse+`&Out=json`

		request({ url: url, method: 'GET' }, function(error, response, body) {
			if(!error && response.statusCode == 200){
				var res = JSON.parse(response.body)
				var verse = res.verses[0]
				var result = {
					ref: verse.ref,
					text: verse.text
				}
				self.sendSocketNotification('VERSE_RESULT', result);
			}
		});
	}
});
