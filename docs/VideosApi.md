---
title: shutterstock-api.VideosApi
permalink: docs/VideosApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addClipboxItems`](#addClipboxItems) | `POST /v2/videos/collections/{id}/items` | Add videos to collections
[`createClipbox`](#createClipbox) | `POST /v2/videos/collections` | Create video collections
[`deleteClipbox`](#deleteClipbox) | `DELETE /v2/videos/collections/{id}` | Delete video collections
[`deleteClipboxItems`](#deleteClipboxItems) | `DELETE /v2/videos/collections/{id}/items` | Remove videos from collections
[`downloadVideos`](#downloadVideos) | `POST /v2/videos/licenses/{id}/downloads` | Download videos
[`getClipbox`](#getClipbox) | `GET /v2/videos/collections/{id}` | Get the details of video collections
[`getClipboxItems`](#getClipboxItems) | `GET /v2/videos/collections/{id}/items` | Get the contents of video collections
[`getClipboxList`](#getClipboxList) | `GET /v2/videos/collections` | List video collections
[`getSimilarVideos`](#getSimilarVideos) | `GET /v2/videos/{id}/similar` | List similar videos
[`getVideo`](#getVideo) | `GET /v2/videos/{id}` | Get details about videos
[`getVideoCategories`](#getVideoCategories) | `GET /v2/videos/categories` | List video categories
[`getVideoLicenseList`](#getVideoLicenseList) | `GET /v2/videos/licenses` | List video licenses
[`getVideoList`](#getVideoList) | `GET /v2/videos` | List videos
[`licenseVideos`](#licenseVideos) | `POST /v2/videos/licenses` | License videos
[`renameClipbox`](#renameClipbox) | `POST /v2/videos/collections/{id}` | Rename video collections
[`searchVideos`](#searchVideos) | `GET /v2/videos/search` | Search for videos


<a name="addClipboxItems"></a>
# VideosApi.addClipboxItems
> `VideosApi.addClipboxItems(id, body)`

**Add videos to collections**

This endpoint adds one or more videos to a collection by video IDs.

### Example {#addClipboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176"; // Collection ID

// Array of videos to add
const body = {
  "items": [
    {
      "id": "10120264",
      "media_type": "video"
    }
  ]
};

videosApi.addLightboxItems(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#addClipboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to which items should be added 
 body (required) | [CollectionItemRequest](CollectionItemRequest)| Array of video IDs to add to the collection 

### Accepted authentication {#addClipboxItems-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#addClipboxItems-headers}


- Content-Type: application/json


### Return type {#addClipboxItems-return}

No response body.


<a name="createClipbox"></a>
# VideosApi.createClipbox
> `CollectionCreateResponse VideosApi.createClipbox(body)`

**Create video collections**

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /videos/collections/{id}/items`.

### Example {#createClipbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const body = {
  "name": "New collection name"
};

videosApi.createClipbox(body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#createClipbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CollectionCreateRequest](CollectionCreateRequest)| Collection metadata 

### Accepted authentication {#createClipbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#createClipbox-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#createClipbox-return}

[CollectionCreateResponse](CollectionCreateResponse)

### Example response {#createClipbox-response}

```
{
  "id" : "48433105"
}
```

<a name="deleteClipbox"></a>
# VideosApi.deleteClipbox
> `VideosApi.deleteClipbox(id)`

**Delete video collections**

This endpoint deletes a collection.

### Example {#deleteClipbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176";

videosApi.deleteClipbox(collectionId)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteClipbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to delete 

### Accepted authentication {#deleteClipbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#deleteClipbox-headers}

No request headers required.



### Return type {#deleteClipbox-return}

No response body.


<a name="deleteClipboxItems"></a>
# VideosApi.deleteClipboxItems
> `VideosApi.deleteClipboxItems(id, queryParams)`

**Remove videos from collections**

This endpoint removes one or more videos from a collection.

### Example {#deleteClipboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "17555176";

// Array of videos to remove
const videosToRemove = {
  "item_id": [
    "10120264"
  ]
};

videosApi.deleteClipboxItems(collectionId, videosToRemove)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteClipboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the Collection from which items will be deleted 
 item_id | [[String]](String)| One or more video IDs to remove from the collection 

### Accepted authentication {#deleteClipboxItems-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#deleteClipboxItems-headers}

No request headers required.



### Return type {#deleteClipboxItems-return}

No response body.


<a name="downloadVideos"></a>
# VideosApi.downloadVideos
> `Url VideosApi.downloadVideos(id, body)`

**Download videos**

This endpoint redownloads videos that you have already received a license for.

### Example {#downloadVideos-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const licenseId = "i1188641347";

const body = {};

videosApi.downloadVideos(licenseId, body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#downloadVideos-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The license ID of the item to (re)download 
 body (required) | [RedownloadVideo](RedownloadVideo)| Information about the videos to redownload 

### Accepted authentication {#downloadVideos-auth}


- OAuth required scopes:
  - licenses.view


### HTTP request headers {#downloadVideos-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#downloadVideos-return}

[Url](Url)

### Example response {#downloadVideos-response}

```
{
  "url" : "url"
}
```

<a name="getClipbox"></a>
# VideosApi.getClipbox
> `Collection VideosApi.getClipbox(id)`

**Get the details of video collections**

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /videos/collections/{id}/items.

### Example {#getClipbox-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "\"17555176\""; // String | The ID of the collection to return


api.getClipbox(id)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getClipbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to return 

### Accepted authentication {#getClipbox-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getClipbox-headers}



- Accept: application/json

### Return type {#getClipbox-return}

[Collection](Collection)

### Example response {#getClipbox-response}

```
{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "updated_time" : "2000-01-23T04:56:07.000+00:00",
  "share_url" : "share_url",
  "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "share_code" : "share_code",
  "cover_item" : {
    "added_time" : "2000-01-23T04:56:07.000+00:00",
    "media_type" : "media_type",
    "id" : "id"
  },
  "total_item_count" : 0
}
```

<a name="getClipboxItems"></a>
# VideosApi.getClipboxItems
> `CollectionItemDataList VideosApi.getClipboxItems(id, queryParams)`

**Get the contents of video collections**

This endpoint lists the IDs of videos in a collection and the date that each was added.

### Example {#getClipboxItems-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "\"17555176\""; // String | The ID of the Collection whose items are to be returned

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getClipboxItems(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getClipboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the Collection whose items are to be returned 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 sort | String| Sort order, defaults to oldest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication {#getClipboxItems-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getClipboxItems-headers}



- Accept: application/json

### Return type {#getClipboxItems-return}

[CollectionItemDataList](CollectionItemDataList)

### Example response {#getClipboxItems-response}

```
{
  "data" : [ {
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "76688182",
    "media_type" : "audio"
  }, {
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "40005859",
    "media_type" : "audio"
  } ],
  "page" : 1,
  "per_page" : 100
}
```

<a name="getClipboxList"></a>
# VideosApi.getClipboxList
> `CollectionDataList VideosApi.getClipboxList(queryParams)`

**List video collections**

This endpoint lists your collections of videos and their basic attributes.

### Example {#getClipboxList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page
};

api.getClipboxList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getClipboxList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 

### Accepted authentication {#getClipboxList-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getClipboxList-headers}



- Accept: application/json

### Return type {#getClipboxList-return}

[CollectionDataList](CollectionDataList)

### Example response {#getClipboxList-response}

```
{
  "data" : [ {
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747953",
    "name" : "Test Collection cdad",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747955",
    "name" : "Test Collection ff5f",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:58-05:00",
    "id" : "5747957",
    "name" : "Updated Collection ebc4",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:58-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747971",
    "name" : "Test Collection 0072",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747973",
    "name" : "Test Collection d332",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  } ]
}
```

<a name="getSimilarVideos"></a>
# VideosApi.getSimilarVideos
> `VideoSearchResults VideosApi.getSimilarVideos(id, queryParams)`

**List similar videos**

This endpoint searches for videos that are similar to a video that you specify.

### Example {#getSimilarVideos-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "\"2140697\""; // String | The ID of a video for which similar videos should be returned

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getSimilarVideos(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getSimilarVideos-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of a video for which similar videos should be returned 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getSimilarVideos-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getSimilarVideos-headers}



- Accept: application/json

### Return type {#getSimilarVideos-return}

[VideoSearchResults](VideoSearchResults)

### Example response {#getSimilarVideos-response}

```
{
  "per_page" : 9,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 3,
  "page" : 7,
  "message" : "message"
}
```

<a name="getVideo"></a>
# VideosApi.getVideo
> `Video VideosApi.getVideo(id, queryParams)`

**Get details about videos**

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

### Example {#getVideo-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = "\"30867073\""; // String | Video ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getVideo(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getVideo-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Video ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getVideo-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getVideo-headers}



- Accept: application/json

### Return type {#getVideo-return}

[Video](Video)

### Example response {#getVideo-response}

```
{
  "has_property_release" : true,
  "aspect_ratio" : "aspect_ratio",
  "models" : [ {
    "id" : "id"
  }, {
    "id" : "id"
  } ],
  "keywords" : [ "keywords", "keywords" ],
  "added_date" : "2000-01-23",
  "description" : "description",
  "affiliate_url" : "http://example.com/aeiou",
  "url" : "url",
  "is_adult" : true,
  "duration" : 2.3021358869347654518833223846741020679473876953125,
  "assets" : {
    "thumb_webm" : {
      "url" : "url"
    },
    "sd" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "preview_jpg" : {
      "url" : "url"
    },
    "preview_mp4" : {
      "url" : "url"
    },
    "web" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "4k" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "thumb_jpgs" : {
      "urls" : [ "urls", "urls" ]
    },
    "preview_webm" : {
      "url" : "url"
    },
    "hd" : {
      "is_licensable" : true,
      "format" : "format",
      "fps" : 1.46581298050294517310021547018550336360931396484375,
      "width" : 5,
      "display_name" : "display_name",
      "file_size" : 6,
      "height" : 5
    },
    "thumb_jpg" : {
      "url" : "url"
    },
    "thumb_mp4" : {
      "url" : "url"
    }
  },
  "contributor" : {
    "id" : "id"
  },
  "is_editorial" : true,
  "media_type" : "media_type",
  "aspect" : 0.80082819046101150206595775671303272247314453125,
  "has_model_release" : true,
  "categories" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ],
  "id" : "id"
}
```

<a name="getVideoCategories"></a>
# VideosApi.getVideoCategories
> `CategoryDataList VideosApi.getVideoCategories()`

**List video categories**

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

### Example {#getVideoCategories-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();
api.getVideoCategories()
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getVideoCategories-parameters}

This endpoint does not accept any parameters.

### Accepted authentication {#getVideoCategories-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getVideoCategories-headers}



- Accept: application/json

### Return type {#getVideoCategories-return}

[CategoryDataList](CategoryDataList)

### Example response {#getVideoCategories-response}

```
{
  "per_page" : 6,
  "data" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}
```

<a name="getVideoLicenseList"></a>
# VideosApi.getVideoLicenseList
> `DownloadHistoryDataList VideosApi.getVideoLicenseList(queryParams)`

**List video licenses**

This endpoint lists existing licenses. You can filter the results according to the type of license or the video ID.

### Example {#getVideoLicenseList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const queryParams = { 
  'video_id': "video_id_example", // String | Show licenses for the specified video ID
  'license': "license_example", // String | Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page
  'sort': "newest" // String | Sort by oldest or newest videos first
};

api.getVideoLicenseList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getVideoLicenseList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 video_id | String| Show licenses for the specified video ID 
 license | String| Show videos that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60;; prepending a &#x60;-&#x60; sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 sort | String| Sort by oldest or newest videos first, defaults to newest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication {#getVideoLicenseList-auth}


- OAuth required scopes:
  - licenses.view


### HTTP request headers {#getVideoLicenseList-headers}



- Accept: application/json

### Return type {#getVideoLicenseList-return}

[DownloadHistoryDataList](DownloadHistoryDataList)

### Example response {#getVideoLicenseList-response}

```
{
  "per_page" : 6,
  "data" : [ {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  }, {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}
```

<a name="getVideoList"></a>
# VideosApi.getVideoList
> `VideoDataList VideosApi.getVideoList(id, queryParams)`

**List videos**

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

### Example {#getVideoList-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.VideosApi();

const id = ["[ \"639703\", \"993721\" ]"]; // [String] | One or more video IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getVideoList(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getVideoList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [[String]](String)| One or more video IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getVideoList-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getVideoList-headers}



- Accept: application/json

### Return type {#getVideoList-return}

[VideoDataList](VideoDataList)

### Example response {#getVideoList-response}

```
{
  "per_page" : 6,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}
```

<a name="licenseVideos"></a>
# VideosApi.licenseVideos
> `LicenseVideoResultDataList VideosApi.licenseVideos(body, queryParams)`

**License videos**

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters.

### Example {#licenseVideos-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const body = {
  "videos": [
    {
      "video_id": "419235589"
    },
    {
      "video_id": "1079756147"
    }
  ]
};

const queryParams = {
  "subscription_id": SHUTTERSTOCK_SUBSCRIPTION_ID,
  "size": "web"
};

videosApi.searchVideos(body, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#licenseVideos-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseVideoRequest](LicenseVideoRequest)| List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
 subscription_id | String| The subscription ID to use for licensing 
 size | String| The size of the video to license, defaults to web <br/><br/>Valid values: "web", "sd", "hd", "4k"
 search_id | String| The Search ID that led to this licensing event 

### Accepted authentication {#licenseVideos-auth}


- OAuth required scopes:
  - licenses.create
required scopes:
  - purchases.view


### HTTP request headers {#licenseVideos-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#licenseVideos-return}

[LicenseVideoResultDataList](LicenseVideoResultDataList)

### Example response {#licenseVideos-response}

```
{
  "per_page" : 1,
  "data" : [ {
    "download" : {
      "url" : "url"
    },
    "price" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "video_id" : "video_id"
  }, {
    "download" : {
      "url" : "url"
    },
    "price" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "video_id" : "video_id"
  } ],
  "total_count" : 5,
  "page" : 6,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}
```

<a name="renameClipbox"></a>
# VideosApi.renameClipbox
> `VideosApi.renameClipbox(id, body)`

**Rename video collections**

This endpoint sets a new name for a collection.

### Example {#renameClipbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const collectionId = "186765119";

const body = {
  "name": "My new collection name"
};

videosApi.renameClipbox(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#renameClipbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| The ID of the collection to rename 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest)| The new name for the collection 

### Accepted authentication {#renameClipbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#renameClipbox-headers}


- Content-Type: application/json


### Return type {#renameClipbox-return}

No response body.


<a name="searchVideos"></a>
# VideosApi.searchVideos
> `VideoSearchResults VideosApi.searchVideos(queryParams)`

**Search for videos**

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example {#searchVideos-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const videosApi = new sstk.VideosApi();

const queryParams = {
  "query": "hot air balloon",
  "duration_from": 30,
  "sort": "popular"
};

videosApi.searchVideos(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#searchVideos-parameters}


Name | Type | Description
------------- | ------------- | -------------
 added_date | Date| Show videos added on the specified date, in the format YYYY-MM-DD 
 added_date_start | Date| Show videos added on or after the specified date, in the format YYYY-MM-DD 
 added_date_end | Date| Show videos added before the specified date, in the format YYYY-MM-DD 
 aspect_ratio | String| Show videos with the specified aspect ratio <br/><br/>Valid values: "4_3", "16_9", "nonstandard"
 category | String| Show videos with the specified Shutterstock-defined category; specify a category name or ID 
 contributor | [[String]](String)| Show videos with the specified artist names or IDs 
 duration | Number| (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration (seconds) 
 duration_from | Number| Show videos with the specified duration or longer (seconds) 
 duration_to | Number| Show videos with the specified duration or shorter (seconds) 
 fps | Number| (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second 
 fps_from | Number| Show videos with the specified frames per second or more 
 fps_to | Number| Show videos with the specified frames per second or fewer 
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh"
 license | [[String]](String)| Show only videos with the specified license or licenses <br/><br/>Valid values: "commercial", "editorial"
 model | [[String]](String)| Show videos with each of the specified models 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 people_age | String| Show videos that feature people of the specified age range <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | String| Show videos with people of the specified ethnicity <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other"
 people_gender | String| Show videos with people with the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show videos with the specified number of people 
 people_model_released | Boolean| Show only videos of people with a signed model release 
 query | String| One or more search terms separated by spaces; you can use NOT to filter out videos that match a term 
 resolution | String| Show videos with the specified resolution <br/><br/>Valid values: "4k", "standard_definition", "high_definition"
 safe | Boolean| Enable or disable safe search, defaults to true 
 sort | String| Sort by one of these categories, defaults to popular <br/><br/>Valid values: "newest", "popular", "relevance", "random"
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#searchVideos-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#searchVideos-headers}



- Accept: application/json

### Return type {#searchVideos-return}

[VideoSearchResults](VideoSearchResults)

### Example response {#searchVideos-response}

```
{
  "per_page" : 9,
  "data" : [ {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  }, {
    "has_property_release" : true,
    "aspect_ratio" : "aspect_ratio",
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "url" : "url",
    "is_adult" : true,
    "duration" : 2.3021358869347654518833223846741020679473876953125,
    "assets" : {
      "thumb_webm" : {
        "url" : "url"
      },
      "sd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "preview_jpg" : {
        "url" : "url"
      },
      "preview_mp4" : {
        "url" : "url"
      },
      "web" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "4k" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpgs" : {
        "urls" : [ "urls", "urls" ]
      },
      "preview_webm" : {
        "url" : "url"
      },
      "hd" : {
        "is_licensable" : true,
        "format" : "format",
        "fps" : 1.46581298050294517310021547018550336360931396484375,
        "width" : 5,
        "display_name" : "display_name",
        "file_size" : 6,
        "height" : 5
      },
      "thumb_jpg" : {
        "url" : "url"
      },
      "thumb_mp4" : {
        "url" : "url"
      }
    },
    "contributor" : {
      "id" : "id"
    },
    "is_editorial" : true,
    "media_type" : "media_type",
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "has_model_release" : true,
    "categories" : [ {
      "name" : "name",
      "id" : "id"
    }, {
      "name" : "name",
      "id" : "id"
    } ],
    "id" : "id"
  } ],
  "total_count" : 3,
  "page" : 7,
  "message" : "message"
}
```
