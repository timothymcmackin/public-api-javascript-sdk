/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.20
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
    define(['../ApiClient', '../model/ContributorProfile', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContributorProfile'), require('./Error'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ContributorProfileDataList = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.ContributorProfile, root.ShutterstockApiReference.Error);
  }
}(this, function(ApiClient, ContributorProfile, Error) {
  'use strict';




  /**
   * The ContributorProfileDataList model module.
   * @module model/ContributorProfileDataList
   * @version 1.0.20
   */

  /**
   * Constructs a new <code>ContributorProfileDataList</code>.
   * List of contributor profiles
   * @alias module:model/ContributorProfileDataList
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ContributorProfileDataList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContributorProfileDataList} obj Optional instance to populate.
   * @return {module:model/ContributorProfileDataList} The populated <code>ContributorProfileDataList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ContributorProfile]);
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('per_page')) {
        obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Conributor profiles
   * @member {Array.<module:model/ContributorProfile>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Error list; appears only if there was an error
   * @member {Array.<module:model/Error>} errors
   */
  exports.prototype['errors'] = undefined;
  /**
   * Error message
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Page of response
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * Number of contributors per page
   * @member {Number} per_page
   */
  exports.prototype['per_page'] = undefined;
  /**
   * Total count of contributors for this request
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;



  return exports;
}));


