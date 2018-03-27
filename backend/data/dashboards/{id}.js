"use strict";

import { expressError } from "./../../services/errorService";
import { getDashboardById } from "../../services/dashboardService";

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
   * operationId: getDashboardById
   */
  get: {
    200: function(req, res) {
      getDashboardById(req.params.id)
        .then(result => res.json(result))
        .catch(err => expressError(req,res,err));
    }
  }
};
