/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.37
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
    root.ShutterstockApiReference.ComputerVisionImageCreateResponse = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ComputerVisionImageCreateResponse model module.
   * @module model/ComputerVisionImageCreateResponse
   * @version 1.0.37
   */

  /**
   * Constructs a new <code>ComputerVisionImageCreateResponse</code>.
   * Asset upload information
   * @alias module:model/ComputerVisionImageCreateResponse
   * @class
   * @param upload_id {String} 
   */
  var exports = function(upload_id) {
    var _this = this;

    _this['upload_id'] = upload_id;
  };

  /**
   * Constructs a <code>ComputerVisionImageCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ComputerVisionImageCreateResponse} obj Optional instance to populate.
   * @return {module:model/ComputerVisionImageCreateResponse} The populated <code>ComputerVisionImageCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('upload_id')) {
        obj['upload_id'] = ApiClient.convertToType(data['upload_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} upload_id
   */
  exports.prototype['upload_id'] = undefined;



  return exports;
}));


