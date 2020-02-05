/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.18
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
    define(['../ApiClient', '../model/LicenseAudio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LicenseAudio'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.LicenseAudioRequest = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.LicenseAudio);
  }
}(this, function(ApiClient, LicenseAudio) {
  'use strict';




  /**
   * The LicenseAudioRequest model module.
   * @module model/LicenseAudioRequest
   * @version 1.0.18
   */

  /**
   * Constructs a new <code>LicenseAudioRequest</code>.
   * License audio tracks
   * @alias module:model/LicenseAudioRequest
   * @class
   * @param audio {Array.<module:model/LicenseAudio>} List of audio tracks to license
   */
  var exports = function(audio) {
    var _this = this;

    _this['audio'] = audio;
  };

  /**
   * Constructs a <code>LicenseAudioRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseAudioRequest} obj Optional instance to populate.
   * @return {module:model/LicenseAudioRequest} The populated <code>LicenseAudioRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('audio')) {
        obj['audio'] = ApiClient.convertToType(data['audio'], [LicenseAudio]);
      }
    }
    return obj;
  }

  /**
   * List of audio tracks to license
   * @member {Array.<module:model/LicenseAudio>} audio
   */
  exports.prototype['audio'] = undefined;



  return exports;
}));


