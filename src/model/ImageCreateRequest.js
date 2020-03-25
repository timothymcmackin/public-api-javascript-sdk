/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.19
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
    root.ShutterstockApiReference.ImageCreateRequest = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageCreateRequest model module.
   * @module model/ImageCreateRequest
   * @version 1.0.19
   */

  /**
   * Constructs a new <code>ImageCreateRequest</code>.
   * Image data for upload
   * @alias module:model/ImageCreateRequest
   * @class
   * @param base64_image {String} A Base64 encoded jpeg or png
   */
  var exports = function(base64_image) {
    var _this = this;

    _this['base64_image'] = base64_image;
  };

  /**
   * Constructs a <code>ImageCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageCreateRequest} obj Optional instance to populate.
   * @return {module:model/ImageCreateRequest} The populated <code>ImageCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('base64_image')) {
        obj['base64_image'] = ApiClient.convertToType(data['base64_image'], 'String');
      }
    }
    return obj;
  }

  /**
   * A Base64 encoded jpeg or png
   * @member {String} base64_image
   */
  exports.prototype['base64_image'] = undefined;



  return exports;
}));


