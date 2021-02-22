
Module.register("MMM-CrucialVerses", {
    // Default module config.
    result: [],
    defaults: {
        size: 'medium',
        alignment: null,
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        var self = this;

        var configuredVersion = this.config.version;

        //Do this once first
        self.sendSocketNotification('START', configuredVersion);

        //Then every hour
        setInterval(function() {
                self.sendSocketNotification('START', configuredVersion);
        }, 3600000); //perform every hour (3600000 milliseconds)
    },

    getStyles: function () {
        return ["MMM-CrucialVerses.css"];
    },

    getScripts: function() {
        return [
            this.file('jquery-3.1.1.min.js'), // this file will be loaded straight from the module folder.
        ]
    },

    // Override dom generator.
    getDom: function() {
        Log.log("Updating MMM-CrucialVerses DOM.");

        var reference = "";
        var text = "";

        if (this.ref != null && this.text != null) {
            reference = this.ref;
            text = this.text;
        }

	      var size = this.config.size
        var alignment = this.config.alignment ? ' '+this.config.alignment : ''

        var wrapper = document.createElement("div");

        const title  = document.createElement("div");
	      title.innerHTML = reference;
        title.className = 'small' + alignment;
        wrapper.appendChild(title)

        const body  = document.createElement("div");
        body.className = 'body bright ' + size + alignment
        body.innerHTML = text;
        wrapper.appendChild(body)

        return wrapper;
      },

    socketNotificationReceived: function(notification, payload) {
        Log.log("socket received from Node Helper");
        if(notification == "VERSE_RESULT"){
            Log.log(payload);
            this.ref = payload.ref;
            this.text = payload.text;

            this.updateDom();
        }
    }
});
