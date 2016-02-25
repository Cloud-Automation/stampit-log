var stampit = require('stampit'),
    log     = require('./stampit-log.js');

var stamp = stampit()
    .refs({
        'logLabel' : 'TEST',
        'logEnabled' : true
    })
    .compose(log)
    .init(function () {
    
        this.logInfo('Logging information', { 'key' : 'someValue' });
        this.logError('Logging an error', 123);
    
    });

stamp();
