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
    define(['../ApiClient', '../model/AudioRenderTimeline'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AudioRenderTimeline'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CreateAudioRender = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRenderTimeline);
  }
}(this, function(ApiClient, AudioRenderTimeline) {
  'use strict';




  /**
   * The CreateAudioRender model module.
   * @module model/CreateAudioRender
   * @version 1.0.34
   */

  /**
   * Constructs a new <code>CreateAudioRender</code>.
   * Data required to create an audio render
   * @alias module:model/CreateAudioRender
   * @class
   * @param preset {module:model/CreateAudioRender.PresetEnum} File format, such as MP3 file, combined WAV file, or individual track WAV files
   * @param filename {String} A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
   * @param timeline {module:model/AudioRenderTimeline} The timeline data with which to generate the render
   */
  var exports = function(preset, filename, timeline) {
    var _this = this;

    _this['preset'] = preset;
    _this['filename'] = filename;
    _this['timeline'] = timeline;
  };

  /**
   * Constructs a <code>CreateAudioRender</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAudioRender} obj Optional instance to populate.
   * @return {module:model/CreateAudioRender} The populated <code>CreateAudioRender</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('preset')) {
        obj['preset'] = ApiClient.convertToType(data['preset'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('timeline')) {
        obj['timeline'] = AudioRenderTimeline.constructFromObject(data['timeline']);
      }
    }
    return obj;
  }

  /**
   * File format, such as MP3 file, combined WAV file, or individual track WAV files
   * @member {module:model/CreateAudioRender.PresetEnum} preset
   */
  exports.prototype['preset'] = undefined;
  /**
   * A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * The timeline data with which to generate the render
   * @member {module:model/AudioRenderTimeline} timeline
   */
  exports.prototype['timeline'] = undefined;


  /**
   * Allowed values for the <code>preset</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PresetEnum = {
    /**
     * value: "MASTER_MP3"
     * @const
     */
    "master_mp3": "MASTER_MP3",
    /**
     * value: "MASTER_WAV"
     * @const
     */
    "MASTER_WAV": "MASTER_WAV",
    /**
     * value: "STEMS_WAV"
     * @const
     */
    "STEMS_WAV": "STEMS_WAV"  };


  return exports;
}));


