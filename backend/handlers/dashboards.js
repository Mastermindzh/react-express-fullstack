'use strict';
var dataProvider = require('../data/dashboards.js');
/**
 * Operations on /dashboards/
 */
module.exports = {
    /**
     * summary: Get all dashboards
     * description: Get all dashboards
     * parameters: 
     * produces: application/json
     * responses: 200
     */
    get: function getDashboards(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Add a new dashboard
     * description: Add a new dashboard
     * parameters: body
     * produces: application/json
     * responses: 200
     */
    post: function addDashboard(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
