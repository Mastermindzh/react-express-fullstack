'use strict';
var dataProvider = require('../../data/dashboards/{id}.js');
/**
 * Operations on /dashboards/{id}
 */
module.exports = {
    /**
     * summary: Get a specific dashboards by id
     * description: Get a specific dashboards by id
     * parameters: id
     * produces: application/json
     * responses: 200
     */
    get: function getDashboardById(req, res, next) {
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
    }
};
