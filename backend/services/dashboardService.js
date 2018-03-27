import models from "./../models";
import { createError, errorMessages } from "./errorService";

/** Returns all dashboards from the database */
export const getDashboards = () => {
  return new Promise((resolve, reject) => {
    models.Dashboard.findAll()
      .then(models => {
        resolve(models);
      })
      .catch(err => {
        reject(createError(errorMessages.something, 500, err));
      });
  });
};

/**
 * add a dashboard to the database
 * @param {any} obj request body
 */
export const addDashboard = obj => {
  return new Promise((resolve, reject) => {
    models.Dashboard.create(obj)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(createError(errorMessages.something, 500, err));
      });
  });
};

/**
 * return dashboard by id
 * @param {int} id
 */
export const getDashboardById = id => {
  return new Promise((resolve, reject) => {
    if (!isNaN(parseInt(id))) {
      models.Dashboard.findById(id)
        .then(model => {
          if (model != null) {
            resolve(model);
          } else {
            reject(createError(errorMessages.noObject, 404));
          }
        })
        .catch(err => reject(createError(errorMessages.something, 500, err)));
    } else {
      reject(createError(errorMessages.invalidId, 404));
    }
  });
};
