/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.28
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.TestValidateQuery = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TestValidateQuery model module.
   * @module model/TestValidateQuery
   * @version 1.0.28
   */

  /**
   * Constructs a new <code>TestValidateQuery</code>.
   * Validation results
   * @alias module:model/TestValidateQuery
   * @class
   * @param id {Number} Integer ID that was passed in the request
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;

  };

  /**
   * Constructs a <code>TestValidateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestValidateQuery} obj Optional instance to populate.
   * @return {module:model/TestValidateQuery} The populated <code>TestValidateQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Integer ID that was passed in the request
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * List of tags that were passed in the request
   * @member {Array.<String>} tag
   */
  exports.prototype['tag'] = undefined;



  return exports;
}));


