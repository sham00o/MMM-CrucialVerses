/* Magic Mirror
 * Node Helper: MMM-CrucialVerses
 *
 * By Samuel Liu
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var request = require('request');
var JSSoup = require('jssoup').default;
var verses = require('verses.js')


module.exports = NodeHelper.create({
	// Subclass start method.
	start: function() {
		console.log("Started node_helper.js for MMM-CrucialVerses.");
		console.log(verses.length)
	},

	socketNotificationReceived: function(notification, payload) {
		console.log(this.name + " node helper received a socket notification: " + notification + " - Payload: " + payload);
		this.prayerRequest(payload);
	},

	verseRequest: function(verse) {
		var self = this;
		var url = f`https://api.lsm.org/recver.php?String='${verse}'&Out=json`

			request({ url: link, method: 'GET' }, function(error, response, body) {
				if(!error && response.statusCode == 200){
					console.log(response)
					var result = {
					}
					self.sendSocketNotification('VERSE_RESULT', result);
				}
			});
	}
});
