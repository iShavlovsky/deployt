'use strict';

/**
 * articles-to-read service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::articles-to-read.articles-to-read');
