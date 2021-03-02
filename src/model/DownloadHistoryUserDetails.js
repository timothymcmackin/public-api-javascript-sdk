/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.33
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
    root.ShutterstockApiReference.DownloadHistoryUserDetails = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DownloadHistoryUserDetails model module.
   * @module model/DownloadHistoryUserDetails
   * @version 1.0.33
   */

  /**
   * Constructs a new <code>DownloadHistoryUserDetails</code>.
   * Information about a user
   * @alias module:model/DownloadHistoryUserDetails
   * @class
   * @param username {String} The name of the user who downloaded the item
   */
  var exports = function(username) {
    var _this = this;

    _this['username'] = username;
  };

  /**
   * Constructs a <code>DownloadHistoryUserDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadHistoryUserDetails} obj Optional instance to populate.
   * @return {module:model/DownloadHistoryUserDetails} The populated <code>DownloadHistoryUserDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the user who downloaded the item
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


