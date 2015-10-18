try {
    module.exports = require('serialport-2');
} catch (e) {
    if (e.code != 'MODULE_NOT_FOUND') throw e;

    module.exports = require('serialport-1');
}
