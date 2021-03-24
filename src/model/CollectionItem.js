/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.35
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
    root.ShutterstockApiReference.CollectionItem = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CollectionItem model module.
   * @module model/CollectionItem
   * @version 1.0.35
   */

  /**
   * Constructs a new <code>CollectionItem</code>.
   * Metadata about an item that is part of a collection
   * @alias module:model/CollectionItem
   * @class
   * @param id {String} ID of the item
   */
  var exports = function(id) {
    var _this = this;


    _this['id'] = id;

  };

  /**
   * Constructs a <code>CollectionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionItem} obj Optional instance to populate.
   * @return {module:model/CollectionItem} The populated <code>CollectionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('added_time')) {
        obj['added_time'] = ApiClient.convertToType(data['added_time'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('media_type')) {
        obj['media_type'] = ApiClient.convertToType(data['media_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date the item was added to the collection
   * @member {Date} added_time
   */
  exports.prototype['added_time'] = undefined;
  /**
   * ID of the item
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The media type of the item, such as image, video, or audio
   * @member {String} media_type
   */
  exports.prototype['media_type'] = undefined;



  return exports;
}));


