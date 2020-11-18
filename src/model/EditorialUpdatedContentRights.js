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
    root.ShutterstockApiReference.EditorialUpdatedContentRights = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EditorialUpdatedContentRights model module.
   * @module model/EditorialUpdatedContentRights
   * @version 1.0.28
   */

  /**
   * Constructs a new <code>EditorialUpdatedContentRights</code>.
   * @alias module:model/EditorialUpdatedContentRights
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EditorialUpdatedContentRights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialUpdatedContentRights} obj Optional instance to populate.
   * @return {module:model/EditorialUpdatedContentRights} The populated <code>EditorialUpdatedContentRights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countries')) {
        obj['countries'] = ApiClient.convertToType(data['countries'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} countries
   */
  exports.prototype['countries'] = undefined;



  return exports;
}));


