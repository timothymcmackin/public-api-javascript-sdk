---
title: shutterstock-api.ImagesApi
permalink: docs/ImagesApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addLightboxItems`](#addLightboxItems) | `POST /v2/images/collections/{id}/items` | Add images to collections
[`createLightbox`](#createLightbox) | `POST /v2/images/collections` | Create image collections
[`deleteLightbox`](#deleteLightbox) | `DELETE /v2/images/collections/{id}` | Delete image collections
[`deleteLightboxItems`](#deleteLightboxItems) | `DELETE /v2/images/collections/{id}/items` | Remove images from collections
[`downloadImage`](#downloadImage) | `POST /v2/images/licenses/{id}/downloads` | Download images
[`getFeaturedLightbox`](#getFeaturedLightbox) | `GET /v2/images/collections/featured/{id}` | Get the details of featured image collections
[`getFeaturedLightboxItems`](#getFeaturedLightboxItems) | `GET /v2/images/collections/featured/{id}/items` | Get the contents of featured image collections
[`getFeaturedLightboxList`](#getFeaturedLightboxList) | `GET /v2/images/collections/featured` | List featured image collections
[`getImage`](#getImage) | `GET /v2/images/{id}` | Get details about images
[`getImageCategories`](#getImageCategories) | `GET /v2/images/categories` | List image categories
[`getImageLicenseList`](#getImageLicenseList) | `GET /v2/images/licenses` | List image licenses
[`getImageList`](#getImageList) | `GET /v2/images` | List images
[`getImageRecommendations`](#getImageRecommendations) | `GET /v2/images/recommendations` | List recommended images
[`getLightbox`](#getLightbox) | `GET /v2/images/collections/{id}` | Get the details of image collections
[`getLightboxItems`](#getLightboxItems) | `GET /v2/images/collections/{id}/items` | Get the contents of image collections
[`getLightboxList`](#getLightboxList) | `GET /v2/images/collections` | List image collections
[`getSimilarImages`](#getSimilarImages) | `GET /v2/images/{id}/similar` | List similar images
[`licenseImages`](#licenseImages) | `POST /v2/images/licenses` | License images
[`renameLightbox`](#renameLightbox) | `POST /v2/images/collections/{id}` | Rename image collections
[`searchImages`](#searchImages) | `GET /v2/images/search` | Search for images
[`uploadEphemeralImage`](#uploadEphemeralImage) | `POST /v2/images` | Upload images


<a name="addLightboxItems"></a>
# ImagesApi.addLightboxItems
> `ImagesApi.addLightboxItems(id, body)`

**Add images to collections**

This endpoint adds one or more images to a collection by image IDs.

### Example {#addLightboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const collectionId = "126351027"; // Collection ID

const body = {
  "items": [
    {
      "id": "495863218",
      "media_type": "image"
    }
  ]
};

imagesApi.addLightboxItems(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#addLightboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionItemRequest](CollectionItemRequest)| Array of image IDs to add to the collection 

### Accepted authentication {#addLightboxItems-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#addLightboxItems-headers}


- Content-Type: application/json


### Return type {#addLightboxItems-return}

No response body.


<a name="createLightbox"></a>
# ImagesApi.createLightbox
> `ImagesApi.createLightbox(body)`

**Create image collections**

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /images/collections/{id}/items`.

### Example {#createLightbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const body = {
  "name": "My collection"
};

imagesApi.createLightbox(body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#createLightbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CollectionCreateRequest](CollectionCreateRequest)| The names of the new collections 

### Accepted authentication {#createLightbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#createLightbox-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#createLightbox-return}

No response body.


<a name="deleteLightbox"></a>
# ImagesApi.deleteLightbox
> `ImagesApi.deleteLightbox(id)`

**Delete image collections**

This endpoint deletes an image collection.

### Example {#deleteLightbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const collectionId = "136351027"; // Collection ID

imagesApi.deleteLightbox(collectionId)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteLightbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 

### Accepted authentication {#deleteLightbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#deleteLightbox-headers}

No request headers required.



### Return type {#deleteLightbox-return}

No response body.


<a name="deleteLightboxItems"></a>
# ImagesApi.deleteLightboxItems
> `ImagesApi.deleteLightboxItems(id, queryParams)`

**Remove images from collections**

This endpoint removes one or more images from a collection.

### Example {#deleteLightboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const collectionId = "126351027"; // Collection ID

// Array of images to remove
const imagesToRemove = {
  "item_id": [
    "495863218"
  ]
};

imagesApi.deleteLightboxItems(collectionId, imagesToRemove)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteLightboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [[String]](String)| One or more image IDs to remove from the collection 

### Accepted authentication {#deleteLightboxItems-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#deleteLightboxItems-headers}

No request headers required.



### Return type {#deleteLightboxItems-return}

No response body.


<a name="downloadImage"></a>
# ImagesApi.downloadImage
> `Url ImagesApi.downloadImage(id, body)`

**Download images**

This endpoint redownloads images that you have already received a license for.

### Example {#downloadImage-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const licenseId = "i1188641347"; // license ID, not image ID

const body = {
  "size": "huge"
};

imagesApi.downloadImage(licenseId, body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#downloadImage-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| License ID 
 body (required) | [RedownloadImage](RedownloadImage)| Information about the images to redownload 

### Accepted authentication {#downloadImage-auth}


- OAuth required scopes:
  - licenses.view


### HTTP request headers {#downloadImage-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#downloadImage-return}

[Url](Url)

### Example response {#downloadImage-response}

```
{
  "url" : "url"
}
```

<a name="getFeaturedLightbox"></a>
# ImagesApi.getFeaturedLightbox
> `FeaturedCollection ImagesApi.getFeaturedLightbox(id, queryParams)`

**Get the details of featured image collections**

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /images/collections/featured/{id}/items`.

### Example {#getFeaturedLightbox-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"136351027\""; // String | Collection ID

const queryParams = { 
  'embed': "embed_example", // String | Which sharing information to include in the response, such as a URL to the collection
  'asset_hint': "1x" // String | Cover image size, defaults to 1x
};

api.getFeaturedLightbox(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getFeaturedLightbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 asset_hint | String| Cover image size, defaults to 1x, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication {#getFeaturedLightbox-auth}


- OAuth (No scope required.)

### HTTP request headers {#getFeaturedLightbox-headers}



- Accept: application/json

### Return type {#getFeaturedLightbox-return}

[FeaturedCollection](FeaturedCollection)

### Example response {#getFeaturedLightbox-response}

```
{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "updated_time" : "2000-01-23T04:56:07.000+00:00",
  "share_url" : "share_url",
  "hero_item" : {
    "url" : "url"
  },
  "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "cover_item" : {
    "url" : "url"
  },
  "total_item_count" : 0
}
```

<a name="getFeaturedLightboxItems"></a>
# ImagesApi.getFeaturedLightboxItems
> `CollectionItemDataList ImagesApi.getFeaturedLightboxItems(id, queryParams)`

**Get the contents of featured image collections**

This endpoint lists the IDs of images in a featured collection and the date that each was added.

### Example {#getFeaturedLightboxItems-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"136351027\""; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getFeaturedLightboxItems(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getFeaturedLightboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

### Accepted authentication {#getFeaturedLightboxItems-auth}


- OAuth (No scope required.)

### HTTP request headers {#getFeaturedLightboxItems-headers}



- Accept: application/json

### Return type {#getFeaturedLightboxItems-return}

[CollectionItemDataList](CollectionItemDataList)

### Example response {#getFeaturedLightboxItems-response}

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

<a name="getFeaturedLightboxList"></a>
# ImagesApi.getFeaturedLightboxList
> `FeaturedCollectionDataList ImagesApi.getFeaturedLightboxList(queryParams)`

**List featured image collections**

This endpoint lists featured collections of specific types and a name and cover image for each collection.

### Example {#getFeaturedLightboxList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': "\"share_url\"", // String | Which sharing information to include in the response, such as a URL to the collection
  'type': ["\"photo\""], // [String] | The types of collections to return
  'asset_hint': "1x" // String | Cover image size, defaults to 1x
};

api.getFeaturedLightboxList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getFeaturedLightboxList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 embed | String| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_url"
 type | [[String]](String)| The types of collections to return <br/><br/>Valid values: "photo", "editorial", "vector"
 asset_hint | String| Cover image size, defaults to 1x, defaults to 1x <br/><br/>Valid values: "1x", "2x"

### Accepted authentication {#getFeaturedLightboxList-auth}


- OAuth (No scope required.)

### HTTP request headers {#getFeaturedLightboxList-headers}



- Accept: application/json

### Return type {#getFeaturedLightboxList-return}

[FeaturedCollectionDataList](FeaturedCollectionDataList)

### Example response {#getFeaturedLightboxList-response}

```
{
  "per_page" : 1,
  "data" : [ {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "share_url" : "share_url",
    "hero_item" : {
      "url" : "url"
    },
    "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "url" : "url"
    },
    "total_item_count" : 0
  }, {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "updated_time" : "2000-01-23T04:56:07.000+00:00",
    "share_url" : "share_url",
    "hero_item" : {
      "url" : "url"
    },
    "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "url" : "url"
    },
    "total_item_count" : 0
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

<a name="getImage"></a>
# ImagesApi.getImage
> `Image ImagesApi.getImage(id, queryParams)`

**Get details about images**

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

### Example {#getImage-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"465011609\""; // String | Image ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getImage(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getImage-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Image ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getImage-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getImage-headers}



- Accept: application/json

### Return type {#getImage-return}

[Image](Image)

### Example response {#getImage-response}

```
{
  "has_property_release" : true,
  "model_releases" : [ {
    "id" : "id"
  }, {
    "id" : "id"
  } ],
  "models" : [ {
    "id" : "id"
  }, {
    "id" : "id"
  } ],
  "keywords" : [ "keywords", "keywords" ],
  "added_date" : "2000-01-23",
  "description" : "description",
  "affiliate_url" : "http://example.com/aeiou",
  "is_illustration" : true,
  "url" : "url",
  "is_adult" : true,
  "releases" : [ "releases", "releases" ],
  "assets" : {
    "preview" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "supersize_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "preview_1000" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "small_thumb" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "vector_eps" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "preview_1500" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "large_thumb" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "huge_tiff" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "medium_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "small_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "supersize_tiff" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "huge_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
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
  "id" : "id",
  "image_type" : "image_type"
}
```

<a name="getImageCategories"></a>
# ImagesApi.getImageCategories
> `CategoryDataList ImagesApi.getImageCategories()`

**List image categories**

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

### Example {#getImageCategories-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();
api.getImageCategories()
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getImageCategories-parameters}

This endpoint does not accept any parameters.

### Accepted authentication {#getImageCategories-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getImageCategories-headers}



- Accept: application/json

### Return type {#getImageCategories-return}

[CategoryDataList](CategoryDataList)

### Example response {#getImageCategories-response}

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

<a name="getImageLicenseList"></a>
# ImagesApi.getImageLicenseList
> `DownloadHistoryDataList ImagesApi.getImageLicenseList(queryParams)`

**List image licenses**

This endpoint lists existing licenses. You can filter the results according to the type of license or the image ID.

### Example {#getImageLicenseList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'image_id': "image_id_example", // String | Show licenses for the specified image ID
  'license': "license_example", // String | Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page, defaults to 20
  'sort': "newest" // String | Sort order
};

api.getImageLicenseList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getImageLicenseList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 image_id | String| Show licenses for the specified image ID 
 license | String| Show images that are available with the specified license, such as &#x60;standard&#x60; or &#x60;enhanced&#x60;; prepending a &#x60;-&#x60; sign excludes results from that license 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 sort | String| Sort order, defaults to newest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication {#getImageLicenseList-auth}


- OAuth required scopes:
  - licenses.view


### HTTP request headers {#getImageLicenseList-headers}



- Accept: application/json

### Return type {#getImageLicenseList-return}

[DownloadHistoryDataList](DownloadHistoryDataList)

### Example response {#getImageLicenseList-response}

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

<a name="getImageList"></a>
# ImagesApi.getImageList
> `ImageDataList ImagesApi.getImageList(id, queryParams)`

**List images**

This endpoint lists information about one or more images, including the available sizes.

### Example {#getImageList-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = ["[ \"1110335168\", \"465011609\" ]"]; // [String] | One or more image IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getImageList(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getImageList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [[String]](String)| One or more image IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getImageList-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getImageList-headers}



- Accept: application/json

### Return type {#getImageList-return}

[ImageDataList](ImageDataList)

### Example response {#getImageList-response}

```
{
  "per_page" : 6,
  "data" : [ {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
  }, {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
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

<a name="getImageRecommendations"></a>
# ImagesApi.getImageRecommendations
> `RecommendationDataList ImagesApi.getImageRecommendations(id, queryParams)`

**List recommended images**

This endpoint returns images that customers put in the same collection as the specified image IDs.

### Example {#getImageRecommendations-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = ["[ 465011609 ]"]; // [String] | Image IDs

const queryParams = { 
  'max_items': 20, // Number | Maximum number of results returned in the response
  'safe': true // Boolean | Restrict results to safe images
};

api.getImageRecommendations(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getImageRecommendations-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [[String]](String)| Image IDs 
 max_items | Number| Maximum number of results returned in the response, defaults to 20 
 safe | Boolean| Restrict results to safe images, defaults to true 

### Accepted authentication {#getImageRecommendations-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getImageRecommendations-headers}



- Accept: application/json

### Return type {#getImageRecommendations-return}

[RecommendationDataList](RecommendationDataList)

### Example response {#getImageRecommendations-response}

```
{
  "per_page" : 6,
  "data" : [ {
    "id" : "id"
  }, {
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

<a name="getLightbox"></a>
# ImagesApi.getLightbox
> `Collection ImagesApi.getLightbox(id, queryParams)`

**Get the details of image collections**

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /images/collections/{id}/items`.

### Example {#getLightbox-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"126351027\""; // String | Collection ID

const queryParams = { 
  'embed': ["embed_example"], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'share_code': "share_code_example" // String | Code to retrieve a shared collection
};

api.getLightbox(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getLightbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 embed | [[String]](String)| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 share_code | String| Code to retrieve a shared collection 

### Accepted authentication {#getLightbox-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getLightbox-headers}



- Accept: application/json

### Return type {#getLightbox-return}

[Collection](Collection)

### Example response {#getLightbox-response}

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

<a name="getLightboxItems"></a>
# ImagesApi.getLightboxItems
> `CollectionItemDataList ImagesApi.getLightboxItems(id, queryParams)`

**Get the contents of image collections**

This endpoint lists the IDs of images in a collection and the date that each was added.

### Example {#getLightboxItems-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"126351027\""; // String | Collection ID

const queryParams = { 
  'share_code': "share_code_example", // String | Code to retrieve the contents of a shared collection
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getLightboxItems(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getLightboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 share_code | String| Code to retrieve the contents of a shared collection 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

### Accepted authentication {#getLightboxItems-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getLightboxItems-headers}



- Accept: application/json

### Return type {#getLightboxItems-return}

[CollectionItemDataList](CollectionItemDataList)

### Example response {#getLightboxItems-response}

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

<a name="getLightboxList"></a>
# ImagesApi.getLightboxList
> `CollectionDataList ImagesApi.getLightboxList(queryParams)`

**List image collections**

This endpoint lists your collections of images and their basic attributes.

### Example {#getLightboxList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = { 
  'embed': ["\"share_code\""], // [String] | Which sharing information to include in the response, such as a URL to the collection
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page, defaults to 100
};

api.getLightboxList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getLightboxList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 embed | [[String]](String)| Which sharing information to include in the response, such as a URL to the collection <br/><br/>Valid values: "share_code", "share_url"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100, defaults to 100 

### Accepted authentication {#getLightboxList-auth}


- OAuth required scopes:
  - collections.view


### HTTP request headers {#getLightboxList-headers}



- Accept: application/json

### Return type {#getLightboxList-return}

[CollectionDataList](CollectionDataList)

### Example response {#getLightboxList-response}

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

<a name="getSimilarImages"></a>
# ImagesApi.getSimilarImages
> `ImageSearchResults ImagesApi.getSimilarImages(id, queryParams)`

**List similar images**

This endpoint returns images that are visually similar to an image that you specify.

### Example {#getSimilarImages-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const id = "\"465011609\""; // String | Image ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20, // Number | Number of results per page, defaults to 20
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getSimilarImages(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getSimilarImages-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Image ID 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getSimilarImages-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getSimilarImages-headers}



- Accept: application/json

### Return type {#getSimilarImages-return}

[ImageSearchResults](ImageSearchResults)

### Example response {#getSimilarImages-response}

```
{
  "spellcheck_info" : "{}",
  "per_page" : 3,
  "data" : [ {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
  }, {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
  } ],
  "total_count" : 2,
  "page" : 9,
  "message" : "message",
  "search_id" : "search_id"
}
```

<a name="licenseImages"></a>
# ImagesApi.licenseImages
> `LicenseImageResultDataList ImagesApi.licenseImages(body, queryParams)`

**License images**

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters.

### Example {#licenseImages-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const body = {
  "images": [
    {
      "image_id": "419235589",
      "price": 12.50,
      "metadata": {
        "customer_id": "12345"
      }
    }
  ]
};

const queryParams = {
  "format": "jpg",
  "size": "huge"
};

imagesApi.licenseImages(body, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#licenseImages-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseImageRequest](LicenseImageRequest)| List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters 
 subscription_id | String| Subscription ID to use to license the image 
 format | String| Image format, defaults to jpg, defaults to jpg <br/><br/>Valid values: "eps", "jpg"
 size | String| Image size, defaults to huge <br/><br/>Valid values: "small", "medium", "huge", "vector"
 search_id | String| Search ID that was provided in the results of an image search 

### Accepted authentication {#licenseImages-auth}


- OAuth required scopes:
  - licenses.create
required scopes:
  - purchases.view


### HTTP request headers {#licenseImages-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#licenseImages-return}

[LicenseImageResultDataList](LicenseImageResultDataList)

### Example response {#licenseImages-response}

```
{
  "per_page" : 5,
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
    "image_id" : "image_id"
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
    "image_id" : "image_id"
  } ],
  "total_count" : 5,
  "page" : 1,
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

<a name="renameLightbox"></a>
# ImagesApi.renameLightbox
> `ImagesApi.renameLightbox(id, body)`

**Rename image collections**

This endpoint sets a new name for an image collection.

### Example {#renameLightbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const collectionId = "126351027"; // Collection ID

const body = {
  "name": "My new collection name"
};

imagesApi.renameLightbox(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#renameLightbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest)| The new name for the collection 

### Accepted authentication {#renameLightbox-auth}


- OAuth required scopes:
  - collections.edit


### HTTP request headers {#renameLightbox-headers}


- Content-Type: application/json


### Return type {#renameLightbox-return}

No response body.


<a name="searchImages"></a>
# ImagesApi.searchImages
> `ImageSearchResults ImagesApi.searchImages(queryParams)`

**Search for images**

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

### Example {#searchImages-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "New York",
  "sort": "popular",
  "orientation": "horizontal"
};

imagesApi.searchImages(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#searchImages-parameters}


Name | Type | Description
------------- | ------------- | -------------
 added_date | Date| Show images added on the specified date, in the format YYYY-MM-DD 
 added_date_start | Date| Show images added on or after the specified date, in the format YYYY-MM-DD 
 added_date_end | Date| Show images added before the specified date, in the format YYYY-MM-DD 
 category | String| Show images with the specified Shutterstock-defined category; specify a category name or ID 
 color | String| Specify a hexadecimal color in the format &#39;#4F21EA&#39;; the API groups it into one of 15 color categories and returns images that primarily use that color category 
 contributor | [[String]](String)| Show images with the specified contributor names or IDs, allows multiple 
 height | Number| (Deprecated; use height_from and height_to instead) Show images with the specified height 
 height_from | Number| Show images with the specified height or larger, in pixels 
 height_to | Number| Show images with the specified height or smaller, in pixels 
 image_type | [[String]](String)| Show images of the specified type <br/><br/>Valid values: "photo", "illustration", "vector"
 language | String| Set query and result language (uses Accept-Language header if not set) <br/><br/>Valid values: "cs", "da", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "ko", "nb", "nl", "pl", "pt", "ru", "sv", "th", "tr", "zh"
 license | [[String]](String)| Show only images with the specified license <br/><br/>Valid values: "commercial", "editorial", "enhanced", "sensitive", "NOT enhanced", "NOT sensitive"
 model | [[String]](String)| Show image results with the specified model IDs 
 orientation | String| Show image results with horizontal or vertical orientation <br/><br/>Valid values: "horizontal", "vertical"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 people_model_released | Boolean| Show images of people with a signed model release 
 people_age | String| Show images that feature people of the specified age category <br/><br/>Valid values: "infants", "children", "teenagers", "20s", "30s", "40s", "50s", "60s", "older"
 people_ethnicity | String| Show images with people of the specified ethnicity <br/><br/>Valid values: "african", "african_american", "black", "brazilian", "chinese", "caucasian", "east_asian", "hispanic", "japanese", "middle_eastern", "native_american", "pacific_islander", "south_asian", "southeast_asian", "other"
 people_gender | String| Show images with people of the specified gender <br/><br/>Valid values: "male", "female", "both"
 people_number | Number| Show images with the specified number of people 
 query | String| One or more search terms separated by spaces; you can use NOT to filter out images that match a term 
 safe | Boolean| Enable or disable safe search, defaults to true 
 sort | String| Sort by, defaults to popular <br/><br/>Valid values: "newest", "popular", "relevance", "random"
 spellcheck_query | Boolean| Spellcheck the search query and return results on suggested spellings, defaults to true 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"
 width | Number| (Deprecated; use width_from and width_to instead) Show images with the specified width 
 width_from | Number| Show images with the specified width or larger, in pixels 
 width_to | Number| Show images with the specified width or smaller, in pixels 

### Accepted authentication {#searchImages-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#searchImages-headers}



- Accept: application/json

### Return type {#searchImages-return}

[ImageSearchResults](ImageSearchResults)

### Example response {#searchImages-response}

```
{
  "spellcheck_info" : "{}",
  "per_page" : 3,
  "data" : [ {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
  }, {
    "has_property_release" : true,
    "model_releases" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "models" : [ {
      "id" : "id"
    }, {
      "id" : "id"
    } ],
    "keywords" : [ "keywords", "keywords" ],
    "added_date" : "2000-01-23",
    "description" : "description",
    "affiliate_url" : "http://example.com/aeiou",
    "is_illustration" : true,
    "url" : "url",
    "is_adult" : true,
    "releases" : [ "releases", "releases" ],
    "assets" : {
      "preview" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "supersize_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1000" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "small_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "vector_eps" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "preview_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "large_thumb" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "huge_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "supersize_tiff" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "huge_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
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
    "id" : "id",
    "image_type" : "image_type"
  } ],
  "total_count" : 2,
  "page" : 9,
  "message" : "message",
  "search_id" : "search_id"
}
```

<a name="uploadEphemeralImage"></a>
# ImagesApi.uploadEphemeralImage
> `ImageCreateResponse ImagesApi.uploadEphemeralImage(body)`

**Upload images**

This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format.

### Example {#uploadEphemeralImage-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const imageFile = fs.readFileSync("./myImage.jpg");
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

const queryParams = {
  "page": 1,
  "per_page": 20,
  "view": "minimal"
};

imagesApi.uploadEphemeralImage(body)
  .then((data) => {
    console.log(data.id);
    return imagesApi.getSimilarImages(data.id, queryParams);
  })
  .then((similarImageData) => {
    console.log(similarImageData);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#uploadEphemeralImage-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [ImageCreateRequest](ImageCreateRequest)| The image data in JPEG or PNG format 

### Accepted authentication {#uploadEphemeralImage-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#uploadEphemeralImage-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#uploadEphemeralImage-return}

[ImageCreateResponse](ImageCreateResponse)

### Example response {#uploadEphemeralImage-response}

```
{
  "id" : "id"
}
```
