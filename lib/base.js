'use strict';

const util = require('util');
const errors = require('@rduk/errors');
const logger = require('@rduk/logger');
const base = require('@rduk/provider/lib/base');

let SVGCleanerBaseProvider = function SVGCleanerBaseProvider(config) {
    SVGCleanerBaseProvider.super_.call(this, config);

    this.initialize();
};

util.inherits(SVGCleanerBaseProvider, base);

SVGCleanerBaseProvider.prototype.initialize = function() {
    logger.info('svg cleaner provider initialized');
};

/**
 * SVGCleanerBaseProvider.prototype.clean
 * 
 * Clean a svg
 * 
 * @param svg Buffer
 * 
 * @return Promise
 */
SVGCleanerBaseProvider.prototype.clean = function(svg) {
    errors.throwNotImplementedError('clean');
};

module.exports = SVGCleanerBaseProvider;
