"use strict";
import { expressError } from "./../services/errorService";
import { getDashboards, addDashboard } from "./../services/dashboardService";

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
   * operationId: getDashboards
   */
  get: {
    200: function(req, res) {
      getDashboards()
        .then(result => res.json(result))
        .catch(err => expressError(req,res,err));
    }
  },
  /**
   * summary: Add a new dashboard
   * description: Add a new dashboard
   * parameters: body
   * produces: application/json
   * responses: 200
   * operationId: addDashboard
   */
  post: {
    200: function(req, res) {
      // delete ID if set
      delete req.body["id"];
      addDashboard(req.body)
        .then(result => res.json(result))
        .catch(err => expressError(req,res,err));
    }
  }
};
