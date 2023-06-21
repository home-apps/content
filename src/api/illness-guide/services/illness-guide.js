'use strict';

/**
 * illness-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::illness-guide.illness-guide');
