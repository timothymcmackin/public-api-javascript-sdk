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
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.ImageSizeDetails = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImageSizeDetails model module.
   * @module model/ImageSizeDetails
   * @version 1.0.20
   */

  /**
   * Constructs a new <code>ImageSizeDetails</code>.
   * Image size information
   * @alias module:model/ImageSizeDetails
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ImageSizeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageSizeDetails} obj Optional instance to populate.
   * @return {module:model/ImageSizeDetails} The populated <code>ImageSizeDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('dpi')) {
        obj['dpi'] = ApiClient.convertToType(data['dpi'], 'Number');
      }
      if (data.hasOwnProperty('file_size')) {
        obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('is_licensable')) {
        obj['is_licensable'] = ApiClient.convertToType(data['is_licensable'], 'Boolean');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Display name of this image size
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Number} dpi
   */
  exports.prototype['dpi'] = undefined;
  /**
   * File size (in bytes) of this image size
   * @member {Number} file_size
   */
  exports.prototype['file_size'] = undefined;
  /**
   * Format of this image size
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Height of this image size
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Whether or not this image can be licensed in this image size
   * @member {Boolean} is_licensable
   */
  exports.prototype['is_licensable'] = undefined;
  /**
   * Width of this image size
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;



  return exports;
}));


