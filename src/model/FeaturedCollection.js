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
    define(['../ApiClient', '../model/FeaturedCollectionCoverItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeaturedCollectionCoverItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.FeaturedCollection = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.FeaturedCollectionCoverItem);
  }
}(this, function(ApiClient, FeaturedCollectionCoverItem) {
  'use strict';




  /**
   * The FeaturedCollection model module.
   * @module model/FeaturedCollection
   * @version 1.0.20
   */

  /**
   * Constructs a new <code>FeaturedCollection</code>.
   * Featured collection metadata
   * @alias module:model/FeaturedCollection
   * @class
   * @param id {String} Collection ID
   * @param name {String} Name of the collection
   * @param total_item_count {Number} Total number of items in the collection
   */
  var exports = function(id, name, total_item_count) {
    var _this = this;




    _this['id'] = id;

    _this['name'] = name;

    _this['total_item_count'] = total_item_count;

  };

  /**
   * Constructs a <code>FeaturedCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeaturedCollection} obj Optional instance to populate.
   * @return {module:model/FeaturedCollection} The populated <code>FeaturedCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cover_item')) {
        obj['cover_item'] = FeaturedCollectionCoverItem.constructFromObject(data['cover_item']);
      }
      if (data.hasOwnProperty('created_time')) {
        obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
      }
      if (data.hasOwnProperty('hero_item')) {
        obj['hero_item'] = FeaturedCollectionCoverItem.constructFromObject(data['hero_item']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('items_updated_time')) {
        obj['items_updated_time'] = ApiClient.convertToType(data['items_updated_time'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('share_url')) {
        obj['share_url'] = ApiClient.convertToType(data['share_url'], 'String');
      }
      if (data.hasOwnProperty('total_item_count')) {
        obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
      }
      if (data.hasOwnProperty('updated_time')) {
        obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FeaturedCollectionCoverItem} cover_item
   */
  exports.prototype['cover_item'] = undefined;
  /**
   * Date that the collection was created, format in YYYY-MM-DDThh:mm:ssT
   * @member {Date} created_time
   */
  exports.prototype['created_time'] = undefined;
  /**
   * Top-level item that is meant as a cover image, as the first image seen to represent the collection
   * @member {module:model/FeaturedCollectionCoverItem} hero_item
   */
  exports.prototype['hero_item'] = undefined;
  /**
   * Collection ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date that an item in the collection was last added or removed, in the format YYYY-MM-DDThh:mm:ssZ
   * @member {Date} items_updated_time
   */
  exports.prototype['items_updated_time'] = undefined;
  /**
   * Name of the collection
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Unique share url for the collection
   * @member {String} share_url
   */
  exports.prototype['share_url'] = undefined;
  /**
   * Total number of items in the collection
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;
  /**
   * Date that the collection was last modified, in the format YYYY-MM-DDThh:mm:ssZ
   * @member {Date} updated_time
   */
  exports.prototype['updated_time'] = undefined;



  return exports;
}));


