/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.4
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
    root.ShutterstockApiReference.CollectionCreateRequest = factory(root.ShutterstockApiReference.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CollectionCreateRequest model module.
   * @module model/CollectionCreateRequest
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>CollectionCreateRequest</code>.
   * Collection creation request
   * @alias module:model/CollectionCreateRequest
   * @class
   * @param name {String} The name of the collection
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>CollectionCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionCreateRequest} obj Optional instance to populate.
   * @return {module:model/CollectionCreateRequest} The populated <code>CollectionCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the collection
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

