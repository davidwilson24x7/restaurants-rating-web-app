## Server API


### Get all images for one restaurant
  * GET `/restaurant/:restaurant_id/images`
  
**Path Parameters:**
  * `restaurant_id` listing/restaurant id
  
**Success Status Code:** `200`

**Returns:** JSON array of objects for each restaurant image
```json
    {
      "restaurant_id": "Number",

       "images": [{
         "imageurl": "String",
         "imageId" : "number",
         "description": "String",
       },...]
      
    }
```

  --------------------------------------------------------------------


### Get specific image for one restaurant
  * GET `/restaurant/:restaurant_id/imageid`
  
**Path Parameters:**
  * `restaurant_id` listing/restaurant id
  
**Success Status Code:** `200`

**Returns:** JSON array of objects for each restaurant image
```json
    {
      "restaurant_id": "Number",
      "imageurl": "String",
      "imageId" : "number",
      "description": "String",
    }
```


--------------------------------------------------------------------

### Add retaurant images
  * POST `/restaurants/:restaurant_id/images`
  
**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.
```json
    {
      "restaurant_id": "Number",
      "imageurl": "String",
      "imageId" : "number",
      "description": "String",
    }
```



--------------------------------------------------------------------

### Update image
  * PATCH `/retaurants/:restaurant_id/images/:imageid`
  
**Path Parameters:**
  * `restaurant_id` restaurant/listing id
  * `imageid` image id
  
**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)
```json
    {
      "restaurant_id": "Number",
      "imageurl": "String",
      "imageId" : "number",
      "description": "String",
    }
```



--------------------------------------------------------------------

### Delete restaurant image
  * DELETE `/restaurants/:restaurant_id/images/:imageid`
  
**Path Parameters:**
  * `restaurant_id` restaurant id
  * `imageid` image id
  
**Success Status Code:** `204`



--------------------------------------------------------------------

### Delete restaurant
  * DELETE `/restaurants/:restaurant_id`
  
**Path Parameters:**
  * `restaurant_id` restaurant id
  
**Success Status Code:** `204`
