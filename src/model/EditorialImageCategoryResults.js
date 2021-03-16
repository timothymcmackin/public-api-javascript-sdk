/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.34
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
    define(['../ApiClient', '../model/EditorialCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditorialCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialImageCategoryResults = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialCategory);
  }
}(this, function(ApiClient, EditorialCategory) {
  'use strict';




  /**
   * The EditorialImageCategoryResults model module.
   * @module model/EditorialImageCategoryResults
   * @version 1.0.34
   */

  /**
   * Constructs a new <code>EditorialImageCategoryResults</code>.
   * List of editorial categories
   * @alias module:model/EditorialImageCategoryResults
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EditorialImageCategoryResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditorialImageCategoryResults} obj Optional instance to populate.
   * @return {module:model/EditorialImageCategoryResults} The populated <code>EditorialImageCategoryResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EditorialCategory]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EditorialCategory>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


