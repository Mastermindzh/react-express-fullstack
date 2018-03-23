export class Error {
  /**
   *
   * @param {string} message message of the error
   * @param {int} code http error code
   */
  constructor(message = "Generic error", code = 500, errorObject = {}) {
    this.message = message;
    this.code = code;
    this.errorObject = errorObject;
  }

  toJson() {
    let returnObj = { error: { code: this.code, message: this.message } };

    for (var key in this.errorObject) {
      if (this.errorObject.hasOwnProperty(key)) {
        returnObj.errorObject = this.errorObject;
      }
    }

    return returnObj;
  }
}

/**
 * send an express error
 * @param {*} req
 * @param {*} res
 * @param {*} error
 */
export const expressError = (req, res, error) => {
  if (!(error instanceof Error)) {
    error = new Error();
  }
  res.status(error.code);
  res.json(error.toJson());
};

/**
 * returns a new error object
 * @param {*} message
 * @param {*} code http status code
 * @param {*} errorObject any extra error info
 */
export const createError = (
  message = "Generic error",
  code = 404,
  errorObject = {}
) => {
  return new Error(message, code, errorObject);
};


export const errorMessages = {
  "something": "Something went wrong.",
  "invalidId": "Invalid identifier supplied",
  "noObject": "No object found"
}
