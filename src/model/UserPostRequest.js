/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.UserPostRequest = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserPostRequest model module.
   * @module model/UserPostRequest
   * @version 1.0.13
   */

  /**
   * Constructs a new <code>UserPostRequest</code>.
   * Data required to create a user
   * @alias module:model/UserPostRequest
   * @class
   * @param email {String} Email address for the new user
   * @param password {String} Password for the new user
   */
  var exports = function(email, password) {
    var _this = this;

    _this['email'] = email;
    _this['password'] = password;

  };

  /**
   * Constructs a <code>UserPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPostRequest} obj Optional instance to populate.
   * @return {module:model/UserPostRequest} The populated <code>UserPostRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email address for the new user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Password for the new user
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * User name for the new user
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


