var stampit = require('stampit');

module.exports = stampit()
    .refs({
    })
    .init(function () {
   
        var init = function () {
        
            if (!this.logEnabled) {
                this.logInfo = function () { };
                this.logError = function () { };
            }
        
        }.bind(this);

        this.logInfo = function () {
     
            var args = Array.prototype.slice.call(arguments);

            if (this.logLabel) {
                args.splice(0, 0, this.logLabel);
            }

            console.log.apply(null, args);
        
        };

        this.logError = function () {
        
            var args = Array.prototype.slice.call(arguments);

            if (this.logLabel) {
                args.splice(0, 0, this.logLabel);
            }

            console.error.apply(null, args);
        
        };
   
        init(); 
    
    });
